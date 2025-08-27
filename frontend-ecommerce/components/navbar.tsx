"use client"
import { Heart, ShoppingBag, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./menu_list";
const Navbar = () => {
    const router = useRouter()


    return (


        < div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl" >
            <h1 className="text-3xl" onClick={() => router.push("/")}>Felipe
                <span className="font-bold"> Cruz </span>
            </h1>
            <div className="items-center justify-between sm:flex">
                <MenuList/>
            </div>
            <div className="flex sm:hidden">
                <p>Items menu mobile</p>
            </div>
            <div className=" flex items-center justify-between gap-2 sm:gap-7   ">
                <ShoppingCart strokeWidth="1"
                    className="cursor-pointer"
                    onClick={() => router.push("/cart")}></ShoppingCart>

                <Heart strokeWidth={"1"} className="cursor-pointer"
                    onClick={() => router.push("/loved-products")} />
                <User strokeWidth={ "1"} className="cursor-pointer"/>


                

            </div>

        </div >
    );
}

export default Navbar;