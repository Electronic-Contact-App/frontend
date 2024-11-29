import { IconBox } from "@/components/common";
import { ArrowIcon } from "@/components/icons";
import { Button, Form } from "@/components/ui";
import { Main } from "@/pages/_components";
import { useForm, type Control, type Path } from "react-hook-form";

type ChooseDocumentFormValues = {
	document: "";
	numberInput: "";
};

const uploadChoice = [
	"National identity card",
	"Health Insurance Card",
	"Educational certificate",
	"Others",
	"National Identity Number",
	"Bank verification Number",
	"Exam number",
	"Others",
];

const uploadChoiceContents = (
	type: Path<ChooseDocumentFormValues>, // this ensures the type is a valid key of the ChooseDocumentFormValues
	control: Control<ChooseDocumentFormValues>,
	start: number,
	end: number
) => {
	return uploadChoice.slice(start, end).map((documentName) => (
		<Form.Item
			key={documentName}
			control={control}
			name={type} // this is passed as an arg which is a value of the specified form values
			className="flex-row rounded-[8px] border border-grey-100 px-[10px] py-[12.5px]"
		>
			<Form.Label className="w-full text-[14px] font-normal">{documentName}</Form.Label>
			<Form.Input
				value={documentName} // distinguishes between options
				type="radio"
				className="size-[20px] rounded-[8px] border-8 border-grey-700 px-[10px]
					placeholder:text-grey-600"
				placeholder="Enter new details"
			/>
		</Form.Item>
	));
};

const ChooseDocument = () => {
	const methods = useForm<ChooseDocumentFormValues>({
		defaultValues: {
			document: "",
			numberInput: "",
		},
	});

	const { control } = methods;

	return (
		<Main className="px-3">
			<section className="relative mt-4 text-center">
				<Button
					unstyled={true}
					className="absolute -top-1/2 mx-1 flex size-11 items-center justify-center self-start
						rounded-full bg-grey-100"
					onClick={() => history.back()}
				>
					<ArrowIcon className="text-icon" />
				</Button>

				<h1>Upload Document</h1>
			</section>

			<section className="mt-[39px] space-y-[16px]">
				<h2 className="text-base font-medium">What document do you want to upload?</h2>

				<Form.Root methods={methods} className="gap-4">
					{uploadChoiceContents("document", control, 0, 4)}
				</Form.Root>
			</section>

			<section className="mt-[16px] space-y-[16px]">
				<h2 className="text-base font-medium">Number input</h2>

				<Form.Root methods={methods} className="gap-4">
					{uploadChoiceContents("numberInput", control, 4, 8)}
				</Form.Root>
			</section>

			<section className="mt-[36px] space-y-2">
				<div className="flex items-center gap-2">
					<span className="grid size-6 place-items-center rounded-full bg-grey-100">
						<IconBox
							icon="material-symbols:shield-lock-outline-rounded"
							className="size-5 text-[hsl(137,99%,39%)]"
						/>
					</span>

					<p className="text-[12px]">Documents uploaded are end-to-end encrypted</p>
				</div>

				<Button disabled={true} theme={"primary"}>
					Continue
				</Button>
			</section>
		</Main>
	);
};

export default ChooseDocument;
