import { IconBox } from "@/components/common";
import { ArrowIcon } from "@/components/icons";
import { Button, Form } from "@/components/ui";
import { Main } from "@/pages/_components";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

type UploadDocumentFormValue = {
	document: "";
};

const UploadDocument = () => {
	const methods = useForm<UploadDocumentFormValue>({
		defaultValues: {
			document: "",
		},
	});

	const { control } = methods;

	return (
		<Main className="px-3">
			<section className="relative mb-[41px] mt-4 text-center">
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

			<section className="grow text-[14px]">
				<Form.Root methods={methods} className="gap-[45px]">
					<Form.Item control={control} name="document" className="space-y-2">
						<Form.Label className="font-medium">Name of document</Form.Label>
						<Form.Input
							className="h-[44px] w-full rounded-[8px] border border-grey-200 px-[10px]
								placeholder:text-grey-600"
							placeholder="Enter new details"
						/>
					</Form.Item>

					<Form.Item control={control} name="document" className="space-y-2">
						<div className="flex justify-between">
							<Form.Label className="text-base font-medium">Add document</Form.Label>
							<Button
								unstyled={true}
								className="flex items-center gap-[2.83px] text-[14px] font-medium text-primary"
							>
								<IconBox
									icon="solar:add-circle-outline"
									className="size-[16px] font-medium text-primary"
								/>
								Add
							</Button>
						</div>
					</Form.Item>
				</Form.Root>
			</section>

			<section className="space-y-2">
				<div className="flex items-center gap-2">
					<span className="grid size-6 place-items-center rounded-full bg-grey-100">
						<IconBox
							icon="material-symbols:shield-lock-outline-rounded"
							className="size-5 text-[hsl(137,99%,39%)]"
						/>
					</span>

					<p className="text-[12px]">Documents uploaded are end-to-end encrypted</p>
				</div>
				<Button theme={"primary"} disabled={true} className="mt-[37px]">
					<div className="mr-[8px] size-[24px]">
						<IconBox icon="solar:add-circle-outline" className="size-full font-medium" />
					</div>
					<Link to="#">Upload</Link>
				</Button>
			</section>
		</Main>
	);
};

export default UploadDocument;
