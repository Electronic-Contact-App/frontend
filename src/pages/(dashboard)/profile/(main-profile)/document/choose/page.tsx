import { IconBox, getElementList } from "@/components/common";
import { Button, Form } from "@/components/ui";
import { Main } from "@/pages/_components";
import { useForm } from "react-hook-form";

type ChooseDocumentFormData = {
	document: "";
	numberInput: "";
};

const uploadChoice = {
	document: ["National identity card", "Health Insurance Card", "Educational certificate", "Others"],
	numberInput: ["National Identity Number", "Bank verification Number", "Exam number", "Others"],
};

const ChooseDocument = () => {
	const methods = useForm<ChooseDocumentFormData>({
		defaultValues: {
			document: "",
			numberInput: "",
		},
	});

	const { control } = methods;

	const [RadioList] = getElementList();

	return (
		<Main className="px-3">
			<header>
				<section className="relative flex items-center justify-center">
					<h1>Upload Document</h1>
				</section>
			</header>

			<Form.Root methods={methods} className="mt-9 gap-4">
				<section className="space-y-4">
					<h2 className="font-medium">What document do you want to upload?</h2>

					<RadioList
						as="div"
						className="flex flex-col gap-3"
						each={uploadChoice.document}
						render={(item) => (
							<Form.Item
								key={item}
								control={control}
								name="document"
								className="border-grey-100 flex-row items-center rounded-[8px] border bg-white
									px-[10px] py-[12.5px]"
							>
								<Form.Label className="w-full text-[14px] font-normal">{item}</Form.Label>
								<Form.Input
									value={item}
									type="radio"
									className="border-grey-700 size-[20px] rounded-[8px] border-8 px-[10px]"
								/>
							</Form.Item>
						)}
					/>
				</section>

				<section className="space-y-4">
					<h2 className="font-medium">Number input</h2>

					<RadioList
						as="div"
						className="flex flex-col gap-3"
						each={uploadChoice.numberInput}
						render={(item) => (
							<Form.Item
								key={item}
								control={control}
								name="numberInput"
								className="border-grey-100 flex-row items-center rounded-[8px] border bg-white
									px-[10px] py-[12.5px]"
							>
								<Form.Label className="w-full text-[14px] font-normal">{item}</Form.Label>
								<Form.Input
									value={item}
									type="radio"
									className="border-grey-700 size-[20px] rounded-[8px] border-8 px-[10px]"
								/>
							</Form.Item>
						)}
					/>
				</section>

				<section className="mt-[36px] space-y-2">
					<div className="flex items-center gap-2">
						<span className="bg-grey-100 grid size-6 place-items-center rounded-full">
							<IconBox
								icon="material-symbols:shield-lock-outline-rounded"
								className="size-5 text-[hsl(137,99%,39%)]"
							/>
						</span>

						<p className="text-[12px]">Documents uploaded are end-to-end encrypted</p>
					</div>

					<Button type="submit" theme="primary">
						Continue
					</Button>
				</section>
			</Form.Root>
		</Main>
	);
};

export default ChooseDocument;
