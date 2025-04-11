import { useEffect, useState } from "react";
import { ProductionCard, ProductionCardData } from "./ProductionCard";
import { GrDocumentCloud } from "react-icons/gr";
import { MdOutlineSettingsSystemDaydream } from "react-icons/md";

const MainProduction = () => {
    const [mainProductions, setMainProductions] = useState<ProductionCardData[] | []>([]);

    useEffect(() => {
        setMainProductions([
            {
                title: '베이직 플랜',
                price: 25600,
                description: ['경제적인 선택', '풍부한 선택폭', '빠른설치', '편리한 편의성'],
                grade: 0,
                icon: <GrDocumentCloud size={150} />
            },
            {
                title: '프로페셔널 플랜',
                price: 98000,
                description: ['베이직플랜 기능', '페이지 커스터마이징 의뢰'],
                grade: 1, // 프로페셔널
                icon: <GrDocumentCloud size={150} />
            },
            {
                title: '얼티메이트 플랜',
                price: 256000,
                description: ['프로페셔널 기능', '서버기능 추가'],
                grade: 2,
                icon: <GrDocumentCloud size={150} />
            },
            {
                title: '베이직 시스템',
                price: 200000,
                description: ['경제적인 선택', '풍부한 선택폭', '빠른설치', '편리한 편의성'],
                grade: 0,
                icon: <MdOutlineSettingsSystemDaydream size={150} />
            },
            {
                title: '프로페셔널 시스템',
                price: 500000,
                description: ['추가 기능 A', '추가 기능 B'],
                grade: 1,
                icon: <MdOutlineSettingsSystemDaydream size={150} />
            },
            {
                title: '얼티메이트 시스템',
                price: 1000000,
                description: ['추가 기능 X', '추가 기능 Y'],
                grade: 2,
                icon: <MdOutlineSettingsSystemDaydream size={150} />
            }
        ]);
    }, []);

    return (
        <div>
            <h2 className="text-center text-2xl font-bold mb-4">적합한 상품 찾기</h2>
            <div className="grid grid-cols-3 gap-4">
                {mainProductions.map((mp, index) => (
                    <ProductionCard key={index} data={mp} />
                ))}
            </div>
        </div>
    );
};

export default MainProduction;