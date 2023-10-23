"use client"
import { useState } from "react";

import { ModalUniversal } from "../modal/ModalUniversal"
import { Button } from "antd";

function BtnComp() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [title, setTitle] = useState('');
	const [isActive, setIsActive] = useState({
		konsultaciya: false,
		tel: false
	});
	const handleCancel = () => {
		setIsModalOpen(false)
	};

	const showModal = (title, active) => {
		setIsModalOpen(true)
		setTitle(title)
		if (active === "konsultaciya") {
			setIsActive(prev => ({ ...prev, konsultaciya: true, tel: false }))
		}
		if (active === "tel") {
			setIsActive(prev => ({ ...prev, konsultaciya: false, tel: true, }))
		}
	};

	return (

		<div className="flex justify-center">
			<Button
				className=''
				style={{borderRadius:'0px'}}
				type="primary"
				onClick={() => showModal("Получить консультацию", "konsultaciya")}
			>
				<span className="text-xs">
					Получить консультацию
				</span>
			</Button>

			<ModalUniversal
				isModalOpen={isModalOpen}
				title={title}
				handleCancel={handleCancel}
				isActive={isActive}
			/>
		</div>
	)
}

export default BtnComp