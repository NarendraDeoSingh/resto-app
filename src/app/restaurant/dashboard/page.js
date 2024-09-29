import RestaurantHeader from "@/app/_components/RestaurantHeader"
import '../../restaurant/style.css'
import { RestaurantFooter } from "@/app/_components/RestaurantFooter"
const Dashboard=()=>{
    return (
        <div>
            <RestaurantHeader/>
            <h1>Welcome to dashboard</h1>
            <RestaurantFooter/>
        </div>
    )
}

export default Dashboard