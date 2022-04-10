import { useEffect } from "react";
import { URLS } from "../services/CONSTANTS";
import { post } from "../services/post";

export const useCategories = (setCategories:any) => {
    useEffect(() => {
        const url = URLS.getCategories;
        post({setData:setCategories, url})
    }, [])
}