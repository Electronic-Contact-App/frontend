import { cnMerge } from "@/lib/utils/cn";
import { toArray } from "@zayne-labs/toolkit";
import {
	type InferProps,
	type PolymorphicProps,
	createCustomContext,
	useToggle,
} from "@zayne-labs/toolkit/react";
import { getOtherChildren, getSlotElement } from "@zayne-labs/toolkit/react/utils";
import { Fragment as ReactFragment, useEffect, useId, useMemo, useRef } from "react";
import {
	type Control,
	type ControllerFieldState,
	Controller as ControllerPrimitive,
	type ControllerProps,
	type ControllerRenderProps,
	type FieldPath,
	type FormState,
	FormProvider as HookFormProvider,
	type RegisterOptions,
	type UseFormReturn,
	type UseFormStateReturn,
	useFormState,
	useFormContext as useHookFormContext,
} from "react-hook-form";
import { getElementList } from "../common/For";
import { IconBox } from "../common/IconBox";

type FieldValues = Record<string, unknown>;

type FormRootProps<TValues extends FieldValues> = React.ComponentPropsWithoutRef<"form"> & {
	children: React.ReactNode;
	methods: UseFormReturn<TValues>;
};

type ContextValue = {
	name: string;
	uniqueId: string;
};

const [StrictFormItemProvider, useStrictFormItemContext] = createCustomContext<ContextValue>({
	hookName: "useStrictFormItemContext",
	providerName: "StrictFormItemProvider",
});

const [LaxFormItemProvider, useLaxFormItemContext] = createCustomContext<ContextValue, false>({
	hookName: "useLaxFormItemContext",
	providerName: "LaxFormItemProvider",
	strict: false,
});

function FormRoot<TValues extends FieldValues>(props: FormRootProps<TValues>) {
	const { children, className, methods, ...restOfProps } = props;

	return (
		<HookFormProvider {...methods}>
			<form className={cnMerge("flex flex-col", className)} {...restOfProps}>
				{children}
			</form>
		</HookFormProvider>
	);
}

type FormItemProps<TControl, TFieldValues extends FieldValues> = (TControl extends Control<infer TValues>
	? {
			control?: never;
			name: keyof TValues;
		}
	: {
			control?: Control<TFieldValues>;
			name: keyof TFieldValues;
		}) & {
	children: React.ReactNode;
	className?: string;
	withWrapper?: boolean;
};

function FormItem<TControl, TFieldValues extends FieldValues = FieldValues>(
	props: FormItemProps<TControl, TFieldValues>
) {
	const { children, className, name, withWrapper = true } = props;

	const uniqueId = useId();

	const value = useMemo(
		() => ({ name: String(name), uniqueId: `${String(name)}-(${uniqueId})` }),
		[name, uniqueId]
	);

	const WrapperElement = withWrapper ? "div" : ReactFragment;

	const wrapperElementProps = withWrapper && {
		className: cnMerge("flex flex-col", className),
	};

	return (
		<StrictFormItemProvider value={value}>
			<LaxFormItemProvider value={value}>
				<WrapperElement {...wrapperElementProps}>{children}</WrapperElement>
			</LaxFormItemProvider>
		</StrictFormItemProvider>
	);
}

function FormLabel(props: InferProps<"label">) {
	const { uniqueId } = useStrictFormItemContext();
	const { children, className, ...restOfProps } = props;

	return (
		<label htmlFor={uniqueId} className={className} {...restOfProps}>
			{children}
		</label>
	);
}

function FormInputGroup(props: React.ComponentPropsWithRef<"div">) {
	const { children, className, ...restOfProps } = props;
	const LeftItemSlot = getSlotElement(children, FormInputLeftItem);
	const RightItemSlot = getSlotElement(children, FormInputRightItem);

	const otherChildren = getOtherChildren(children, [FormInputLeftItem, FormInputRightItem]);

	return (
		<div className={cnMerge("flex items-center justify-between gap-2", className)} {...restOfProps}>
			{LeftItemSlot}
			{otherChildren}
			{RightItemSlot}
		</div>
	);
}

type FormSideItemProps = {
	children?: React.ReactNode;
	className?: string;
};

function FormInputLeftItem<TElement extends React.ElementType = "span">(
	props: PolymorphicProps<TElement, FormSideItemProps>
) {
	const { children, className, ...restOfProps } = props;

	return (
		<span className={cnMerge("inline-flex items-center justify-center", className)} {...restOfProps}>
			{children}
		</span>
	);
}
FormInputLeftItem.slot = Symbol.for("leftItem");

function FormInputRightItem<TElement extends React.ElementType = "span">(
	props: PolymorphicProps<TElement, FormSideItemProps>
) {
	const { as: Element = "span", children, className, ...restOfProps } = props;

	return (
		<Element className={cnMerge("inline-flex items-center justify-center", className)} {...restOfProps}>
			{children}
		</Element>
	);
}
FormInputRightItem.slot = Symbol.for("rightItem");

export type FormInputPrimitiveProps<TFieldValues extends FieldValues = FieldValues> = Omit<
	React.ComponentPropsWithRef<"input">,
	"children"
> & {
	classNames?: { error?: string; eyeIcon?: string; input?: string; inputGroup?: string };
	name?: keyof TFieldValues;
	withEyeIcon?: boolean;
} & (
		| { control: Control<TFieldValues>; formState?: never }
		| { control?: never; formState?: FormState<TFieldValues> }
	);

const inputTypesWithoutFullWith = new Set<React.HTMLInputTypeAttribute>(["checkbox", "radio"]);

function FormInputPrimitive<TFieldValues extends FieldValues>(
	props: FormInputPrimitiveProps<TFieldValues>
) {
	const contextValues = useLaxFormItemContext();

	const {
		className,
		classNames,
		control,
		formState,
		id = contextValues?.uniqueId,
		name = contextValues?.name,
		type = "text",
		withEyeIcon = true,
		...restOfProps
	} = props;

	const getFormState = (control ? useFormState : () => formState) as typeof useFormState;

	const { errors } = (getFormState({ control }) as UseFormStateReturn<TFieldValues> | undefined) ?? {};

	const [isPasswordVisible, toggleVisibility] = useToggle(false);

	const shouldHaveEyeIcon = withEyeIcon && type === "password";

	const WrapperElement = shouldHaveEyeIcon ? FormInputGroup : ReactFragment;

	const wrapperElementProps = shouldHaveEyeIcon && {
		className: cnMerge("w-full", classNames?.inputGroup, name && errors?.[name] && classNames?.error),
	};

	return (
		<WrapperElement {...wrapperElementProps}>
			<input
				id={id}
				name={name}
				type={type === "password" && isPasswordVisible ? "text" : type}
				className={cnMerge(
					!inputTypesWithoutFullWith.has(type) && "flex w-full",
					`placeholder:text-shadcn-muted-foreground bg-transparent text-sm file:border-0
					file:bg-transparent focus-visible:outline-hidden disabled:cursor-not-allowed
					disabled:opacity-50`,
					className,
					classNames?.input,
					type !== "password" && name && errors?.[name] && classNames?.error
				)}
				{...restOfProps}
			/>

			{shouldHaveEyeIcon && (
				<FormInputRightItem
					as="button"
					type="button"
					onClick={toggleVisibility}
					className="size-5 shrink-0 lg:size-6"
				>
					{isPasswordVisible ? (
						<IconBox
							icon="material-symbols:visibility-off-outline-rounded"
							className={cnMerge("size-full", classNames?.eyeIcon)}
						/>
					) : (
						<IconBox
							icon="material-symbols:visibility-outline-rounded"
							className={cnMerge("size-full", classNames?.eyeIcon)}
						/>
					)}
				</FormInputRightItem>
			)}
		</WrapperElement>
	);
}

function FormInput(
	props: Omit<FormInputPrimitiveProps, "control" | "formState" | "name" | "ref"> & {
		rules?: RegisterOptions;
	}
) {
	const { rules, ...restOfProps } = props;

	const { name } = useStrictFormItemContext();
	const { formState, register } = useHookFormContext();

	return (
		<FormInputPrimitive
			name={name}
			formState={formState}
			{...(Boolean(name) && register(name, rules))}
			{...restOfProps}
		/>
	);
}

type FormTextAreaPrimitiveProps<TFieldValues extends FieldValues = FieldValues> =
	React.ComponentPropsWithRef<"textarea"> & {
		errorClassName?: string;
		name?: keyof TFieldValues;
	} & (
			| { control: Control<TFieldValues>; formState?: never }
			| { control?: never; formState?: FormState<TFieldValues> }
		);

function FormTextAreaPrimitive<TFieldValues extends FieldValues>(
	props: FormTextAreaPrimitiveProps<TFieldValues>
) {
	const contextValues = useLaxFormItemContext();

	const {
		className,
		control,
		errorClassName,
		formState,
		id = contextValues?.uniqueId,
		name = contextValues?.name,
		...restOfProps
	} = props;

	const getFormState = (control ? useFormState : () => formState) as typeof useFormState;

	const { errors } = (getFormState({ control }) as UseFormStateReturn<TFieldValues> | undefined) ?? {};

	return (
		<textarea
			id={id}
			name={name}
			className={cnMerge(
				`placeholder:text-shadcn-muted-foreground w-full bg-transparent text-sm
				focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50`,
				className,
				name && errors?.[name] && errorClassName
			)}
			{...restOfProps}
		/>
	);
}

function FormTextArea(
	props: Omit<FormTextAreaPrimitiveProps, "control" | "formState" | "id" | "name" | "ref"> & {
		rules?: RegisterOptions;
	}
) {
	const { rules, ...restOfProps } = props;

	const { name } = useStrictFormItemContext();
	const { formState, register } = useHookFormContext();

	return (
		<FormTextAreaPrimitive
			name={name}
			formState={formState}
			{...(Boolean(name) && register(name, rules))}
			{...restOfProps}
		/>
	);
}

type FormControllerProps<TFieldValues> = Omit<
	ControllerProps<FieldValues, FieldPath<FieldValues>>,
	"control" | "name" | "render"
> & {
	render: (props: {
		field: Omit<ControllerRenderProps, "value"> & { value: TFieldValues };
		fieldState: ControllerFieldState;
		formState: UseFormStateReturn<FieldValues>;
	}) => React.ReactElement;
};

function FormController<TFieldValues = never>(props: FormControllerProps<TFieldValues>) {
	const { control } = useHookFormContext<FieldValues, FieldPath<FieldValues>>();
	const { name } = useStrictFormItemContext();

	return (
		<ControllerPrimitive name={name} control={control} {...(props as Omit<ControllerProps, "name">)} />
	);
}

type FormErrorRenderProps = {
	className: string;
	field: { errorMessage: string; errorMessageArray: string[]; index: number };
	onAnimationEnd?: React.ReactEventHandler<HTMLElement>;
};

type FormErrorMessagePrimitiveProps<TFieldValues extends FieldValues> = {
	className?: string;
	classNames?: {
		container?: string;
		errorMessage?: string;
		errorMessageAnimation?: string;
	};
	control: Control<TFieldValues>; // == Here for type inference of errorField prop
	render: (props: FormErrorRenderProps) => React.ReactNode;
	withAnimationOnInvalid?: boolean;
} & (
	| {
			errorField: keyof TFieldValues;
			type?: "regular";
	  }
	| {
			errorField: string;
			type: "root";
	  }
);

function FormErrorMessagePrimitive<TFieldValues extends FieldValues>(
	props: Extract<FormErrorMessagePrimitiveProps<TFieldValues>, { type?: "regular" }>
): React.ReactNode;

function FormErrorMessagePrimitive<TFieldValues extends FieldValues>(
	// eslint-disable-next-line ts-eslint/unified-signatures
	props: Extract<FormErrorMessagePrimitiveProps<TFieldValues>, { type: "root" }>
): React.ReactNode;

function FormErrorMessagePrimitive<TFieldValues extends FieldValues>(
	props: FormErrorMessagePrimitiveProps<TFieldValues>
) {
	const {
		className,
		classNames,
		control,
		errorField,
		render,
		type = "regular",
		withAnimationOnInvalid = true,
	} = props;

	const formState = useFormState({ control });

	const wrapperRef = useRef<HTMLUListElement>(null);

	const errorAnimationClass = classNames?.errorMessageAnimation ?? "animate-shake";

	useEffect(() => {
		if (!withAnimationOnInvalid) return;

		const errorMessageElements = wrapperRef.current?.children;

		if (!errorMessageElements) return;

		for (const element of errorMessageElements) {
			element.classList.add(errorAnimationClass);
		}
	}, [errorAnimationClass, withAnimationOnInvalid]);

	useEffect(() => {
		const errorMessageElements = wrapperRef.current?.children;

		if (!errorMessageElements) return;

		// == Scroll to first error message
		if (Object.keys(formState.errors).indexOf(errorField as string) === 0) {
			errorMessageElements[0]?.scrollIntoView({
				behavior: "smooth",
				block: "center",
			});

			window.scrollBy({ behavior: "smooth", top: -100 });
		}
	}, [errorField, formState.errors]);

	const message = (
		type === "root"
			? formState.errors.root?.[errorField as string]?.message
			: formState.errors[errorField]?.message
	) as string | string[];

	if (!message) {
		return null;
	}

	const errorMessageArray = toArray(message);

	const [ErrorMessageList] = getElementList();

	const onAnimationEnd: React.AnimationEventHandler<HTMLElement> | undefined = withAnimationOnInvalid
		? (event) => event.currentTarget.classList.remove(errorAnimationClass)
		: undefined;

	return (
		<ErrorMessageList
			ref={wrapperRef}
			each={errorMessageArray}
			className={cnMerge("flex flex-col", classNames?.container)}
			render={(errorMessage, index) => {
				return render({
					className: cnMerge(errorAnimationClass, className, classNames?.errorMessage),
					field: { errorMessage, errorMessageArray, index },
					onAnimationEnd,
				});
			}}
		/>
	);
}

type FormErrorMessageProps<TControl, TFieldValues extends FieldValues> =
	| (TControl extends Control<infer TValues>
			? {
					className?: string;
					control?: never;
					errorField?: keyof TValues;
					type?: "regular";
				}
			: {
					className?: string;
					control?: Control<TFieldValues>; // == Here for type inference of errorField prop
					errorField?: keyof TFieldValues;
					type?: "regular";
				})
	| {
			className?: string;
			control?: never;
			errorField: string;
			type: "root";
	  };

function FormErrorMessage<TControl, TFieldValues extends FieldValues = FieldValues>(
	props: FormErrorMessageProps<TControl, TFieldValues>
) {
	const contextValues = useLaxFormItemContext();

	const { className, errorField = contextValues?.name, type = "regular" } = props;

	const { control } = useHookFormContext();

	return (
		<FormErrorMessagePrimitive
			control={control}
			errorField={errorField as string}
			type={type as "root"}
			render={({ field: { errorMessage, index }, ...restOfProps }) => (
				<p
					key={errorMessage}
					{...restOfProps}
					className={cnMerge("text-[13px]", restOfProps.className, className, index === 0 && "mt-1")}
				>
					<span>*</span>
					{errorMessage}
				</p>
			)}
		/>
	);
}

export const Root = FormRoot;

export const Item = FormItem;

export const Label = FormLabel;

export const ErrorMessagePrimitive = FormErrorMessagePrimitive;

export const ErrorMessage = FormErrorMessage;

export const Input = FormInput;

export const InputPrimitive = FormInputPrimitive;

export const InputGroup = FormInputGroup;

export const InputLeftItem = FormInputLeftItem;

export const InputRightItem = FormInputRightItem;

export const TextAreaPrimitive = FormTextAreaPrimitive;

export const TextArea = FormTextArea;

export const Controller = FormController;

export { Controller as ControllerPrimitive } from "react-hook-form";
