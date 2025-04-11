import { GrDocumentCloud } from "react-icons/gr";
import { MdOutlineSettingsSystemDaydream } from "react-icons/md";
import '../../../src/assets/css/productionCard.css'
import { ReactComponentElement, ReactElement } from "react";

interface ProductionCardProps {
    data: ProductionCardData;
}

export interface ProductionCardData {
    title: string;
    price: number;
    description: string[];
    grade: number; // 0: 베이직, 1: 프로페셔널, 2: 얼티메이트
    icon: ReactElement
}

export const ProductionCard: React.FC<ProductionCardProps> = ({ data }) => {
    // grade 값을 기반으로 테두리 색상 클래스 설정
    const borderColorClass =
        data.grade === 0
            ? "border-black animate-border-black"
            : data.grade === 1
            ? "border-green-500 animate-border-green"
            : "border-purple-500 animate-border-purple";

    return (
        <div
            className={`flex flex-col p-10 border-4 rounded-3xl justify-between ${borderColorClass} cursor-pointer`}
            style={{ width: "350px", height: "400px" }}
        >
            <div className="text-3xl">
                <p>&#8361;{data.price.toLocaleString()} ~ </p>
            </div>
            <div className="flex flex-row justify-between">
                <div>
                    {data.icon}
                    <p>{data.title}</p>
                </div>
                <div className="text-sm">
                    <ul className="flex flex-col h-full justify-between">
                        {data.description.map((d, index) => (
                            <li key={index}>{d}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

