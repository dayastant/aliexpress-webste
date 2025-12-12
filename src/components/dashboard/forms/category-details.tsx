"use client"
import { Category } from "@/generated/prisma/client"
import { CategoryFormSchema } from "@/lib/schemas";
import { FC, useEffect } from "react"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"

import * as z from "zod";
import { toast } from "sonner";
import { Value } from "@radix-ui/react-select";
import { AlertDialog } from "@/components/ui/alert-dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface CategoryDetailsProps {
    data?: Category
}

const CategoryDetails: FC<CategoryDetailsProps> = ({ data }) => {

    const form = useForm<z.infer<typeof CategoryFormSchema>>({
        mode: "onChange",
        resolver: zodResolver(CategoryFormSchema),
        defaultValues: {
            name: data?.name,
            image: data?.image ? [{ url: data?.image }] : [],
            url: data?.url,
            featured: data?.featured,

        },
    })

    const isLoading = form.formState.isSubmitting;

    useEffect(() => {
        if (data) {
            form.reset({
                name: data?.name,
                image: [{ url: data?.image }],
                url: data?.url,
                featured: data?.featured,
            });
        }
    }, [data, form, toast])



    const handleSubmit = async (values: z.infer<typeof CategoryFormSchema>) => {
        console.log(values)
    }
    return <AlertDialog>
        <Card className="w-full">
            <CardHeader>
                <CardTitle> Category information</CardTitle>
                <CardDescription>{data?.id ? `Update ${data?.name} category information.`:" Lets create a category. You can edit category later from the categories table or the category page."}</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                        <FormField 
                        disabled={isLoading}
                        control={form.control}
                        name="name"
                        render={({field}) =>(
                            <FormItem className="flex-1">
                                <FormLabel>Category name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Name " {...field}/>
                                </FormControl>
                            </FormItem>
                        )}
                        />
                        <FormField 
                        disabled={isLoading}
                        control={form.control}
                        name="url"
                        render={({field}) =>(
                            <FormItem className="flex-1">
                                <FormLabel>Category url</FormLabel>
                                <FormControl>
                                    <Input placeholder="/category-url" {...field}/>
                                </FormControl>
                            </FormItem>
                        )}
                        />

                    </form>
                </Form>
            </CardContent>
        </Card>
    </AlertDialog>
};

export default CategoryDetails