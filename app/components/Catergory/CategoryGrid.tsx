import CategoryCard from "./CategoryCard";

const CategoryGrid = function () {
    return(
        <div>
            <div className="pl-[8px]">
                <h2 className="text-mobile-h2 font-[600] leading-normal">
                    Shop popular <br/>categories
                </h2>
            </div>
            <CategoryCard/>
        </div>
    );
}

export default CategoryGrid;