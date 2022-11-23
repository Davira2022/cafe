import Filter from "./Filter";

const AllCategories = () => {
    return(<div>
                {['ALL', 'AVAILABLE', 'PREORDER']
                .map((category, index) => <Filter category={category} key={index}/>)
                }
                
            </div>)
}

export default AllCategories;