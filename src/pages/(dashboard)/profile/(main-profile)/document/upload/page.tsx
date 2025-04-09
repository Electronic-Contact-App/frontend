import { IconBox } from "@/components/common";
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
			<header>
				<section className="relative mt-4 mb-[41px] text-center">
					<h1>Upload Document</h1>
				</section>
			</header>

			<section className="grow text-[14px]">
				<Form.Root methods={methods} className="gap-[45px]">
					<Form.Item control={control} name="document" className="space-y-2">
						<Form.Label className="font-medium">Name of document</Form.Label>
						<Form.Input
							className="border-grey-200 placeholder:text-grey-600 h-[44px] w-full rounded-[8px]
								border px-[10px]"
							placeholder="Enter new details"
						/>
					</Form.Item>

					<Form.Item control={control} name="document" className="space-y-2">
						<div className="flex justify-between">
							<Form.Label className="text-base font-medium">Add document</Form.Label>
							<Button
								unstyled={true}
								className="text-primary flex items-center gap-[2.83px] text-[14px] font-medium"
							>
								<IconBox
									icon="solar:add-circle-outline"
									className="text-primary size-[16px] font-medium"
								/>
								Add
							</Button>
						</div>
					</Form.Item>
				</Form.Root>
			</section>

			<section className="space-y-2">
				<div className="flex items-center gap-2">
					<span className="bg-grey-100 grid size-6 place-items-center rounded-full">
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
