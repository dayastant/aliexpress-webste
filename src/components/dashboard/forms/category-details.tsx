import {Category} from "@/generated/prisma/client"
import { CategoryFormSchema } from "@/lib/schemas";
import { FC } from "react"
import { useForm } from "react-hook-form";

import * as z from "zod";

interface CategoryDetailsProps{
    data?:Category
}

const CategoryDetails : FC<CategoryDetailsProps> =({data}) =>{

    const form = useForm<z.infer<typeof CategoryFormSchema>>
    return <div>
    </div>
}

export default CategoryDetails