"use client"

import { useEffect, useState } from 'react';
import {API_URL} from '@/lib/api-request'
import axios from 'axios';
import ContentForum from '@/components/ContentForum';
import { useRouter } from 'next/router';

const Page = () => {
    const [subSlug, setSubSlug] = useState("");
    const [content, setContent] = useState([]);
    const router = useRouter();
    const { slug, postId } = router.query;
    let url = ""
    let pathArray:any;
    // let postId:any;
    if (typeof window !== 'undefined') {
        url = window.location.pathname;
        pathArray = url.split("/").filter(item => item !== "");
        
        // postId = url.split("=")[1].split("/").join("")
        console.log(postId,"postId");
        // Tiếp tục xử lý dữ liệu
    }
    useEffect(() => {
        setSubSlug(pathArray[pathArray.length - 1])
        let apiUrl = `${API_URL}/Discuss/Get?action=getdiscussdetail&slug=${postId}`;
          axios.get(apiUrl)
            .then(response => {
                // Xử lý dữ liệu nhận được từ API
                setContent(response.data)
            })
            .catch(error => {
                // Xử lý lỗi (nếu có)
                console.error('Error fetching data: ', error);
            });
        
    }, [subSlug, url])

  return (
    <div>
      {/* <ContentForum data={content} pathArr={pathArray} /> */}
    </div>
  );
};

export default Page;
