"use client"

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";
import {API_URL} from '@/lib/api-request'
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import {logo} from '@/lib/image';
import Head from 'next/head';


interface MenuItem {
  text: string;
  children: MenuItem[];
  id: number;
  slug: string;
  // Thêm các trường dữ liệu khác nếu cần thiết
}

interface Props {
  item: MenuItem;
  parentPath?: string;
}
  
const MenuItem: React.FC<Props> = ({ item, parentPath = "" }) => {
  const itemPath = `${parentPath}/${item.slug}`;
  return (
    <li>
      <Link href={itemPath}>{item.text}{item.children.length > 0 && <FontAwesomeIcon icon={faAngleDown} />}</Link>
      {item.children.length > 0 && (
        <ul>
          {item.children.map(child => (
            <MenuItem key={child.id} item={child} parentPath={itemPath} />
          ))}
        </ul>
      )}
    </li>
  );
};

const Page = () => {
  const [menuData, setMenuData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Chỉ truy cập localStorage khi chạy trong môi trường trình duyệt
      const storedToken = localStorage.getItem("Token") ?? "";
      setToken(storedToken);
      setIsLoading(true);
    }
    // Địa chỉ API endpoint bạn muốn gửi yêu cầu GET
    const apiUrlCategory = `${API_URL}/Category/GetTreeCategory?action=get&para1=a`;

    // Sử dụng Axios để gửi yêu cầu GET đến API endpoint
    axios.get(apiUrlCategory)
        .then(response => {
            // Xử lý dữ liệu nhận được từ API
            setMenuData(response.data);
        })
        .catch(error => {
            // Xử lý lỗi (nếu có)
            console.error('Error fetching data: ', error);
        });
  }, []); 

  return (
    <>
      <Head>
        <meta name="description" content="Mô tả trang web của bạn" />
        <meta property="og:title" content="Tiêu đề trang web" />
        <meta property="og:description" content="Mô tả trang web" />
        <meta property="og:image" content="URL-hinh-anh" />
        <meta name="twitter:card" content="summary_large_image" />

      </Head>
      <header className='c-header'>
        <div className="l-container">
            <div className='c-header__inner'>
                <div className="c-header__logo">
                    <Link href="/">
                        <Image src={logo} width={160}  height={60} alt='' />
                    </Link>
                </div>
                <nav className="menu">
                  <ul>{menuData.map((item, i) => <MenuItem key={i} item={item} />)}</ul>
                </nav>
                {
                  isLoading && token === "" ? (
                  <div className="login">
                    <Link href="/login">Đăng nhập</Link>
                  </div> )
                  : (
                  <div className="account">
                      <Link href="/account">Tài khoản</Link>
                  </div> )
                }
                <div className='burger'>
                    <div className='burger__menu'>
                        <span></span><span></span><span></span>
                    </div>
                    <p>MENU</p>
                </div>
            </div>
            
        </div>
    </header>
    </>
  );
};

export default Page;
