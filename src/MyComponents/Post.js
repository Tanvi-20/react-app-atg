import React from 'react';
import './Post.css';
import post1 from './post1.png';
import post2 from './post2.png';
import post3 from './post3.png';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import article from './articleimg.svg';
import eduimg from './eduimg.svg';
import meetup from './meetup.svg';
import job from './job.svg';
import profile1 from './profile1.png';
import profile2 from './profile2.png';
import profile3 from './profile3.png';
import profile4 from './profile4.png';
import { HiDotsHorizontal } from 'react-icons/hi';
import { AiOutlineEye } from 'react-icons/ai';
import Button from 'react-bootstrap/Button'


export default function Post() {
    return (
        <div>
            <>
            <CardColumns>
  <Card >
    <Card.Img variant="top" src={post1} />
    <Card.Body>
    <img src={article} className="art-img" alt="Article"></img>
      <Card.Title className="p-title">What if famous brands had regular fonts? Meet RegulaBrands!<span className="p-title d31"><HiDotsHorizontal /></span></Card.Title>
      <Card.Text className="p-txt">
      I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
      </Card.Text>
      <span className="profile"><img src={profile1} alt="Profile"></img>  Sarthak Kamra</span>
      <span className="eye"><AiOutlineEye  />1.4k views <svg width="42" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="share">
            <rect width="42" height="36" rx="2" fill="#EDEEF0"/>
            <path d="M25.5 21.06C24.93 21.06 24.42 21.285 24.03 21.6375L18.6825 18.525C18.72 18.3525 18.75 18.18 18.75 18C18.75 17.82 18.72 17.6475 18.6825 17.475L23.97 14.3925C24.375 14.7675 24.9075 15 25.5 15C26.745 15 27.75 13.995 27.75 12.75C27.75 11.505 26.745 10.5 25.5 10.5C24.255 10.5 23.25 11.505 23.25 12.75C23.25 12.93 23.28 13.1025 23.3175 13.275L18.03 16.3575C17.625 15.9825 17.0925 15.75 16.5 15.75C15.255 15.75 14.25 16.755 14.25 18C14.25 19.245 15.255 20.25 16.5 20.25C17.0925 20.25 17.625 20.0175 18.03 19.6425L23.37 22.7625C23.3325 22.92 23.31 23.085 23.31 23.25C23.31 24.4575 24.2925 25.44 25.5 25.44C26.7075 25.44 27.69 24.4575 27.69 23.25C27.69 22.0425 26.7075 21.06 25.5 21.06Z" fill="#2D2D2D"/>
            </svg></span>
      
    </Card.Body>
  </Card>

  <Card >
    <Card.Img variant="top" src={post2} />
    <Card.Body>
    <img src={eduimg} className="art-img" alt="Article"></img>
      <Card.Title className="p-title">Tax Benefits for Investment under National Pension Scheme launched by Government<span className="d31"><HiDotsHorizontal /></span></Card.Title>
      <Card.Text className="p-txt">
      I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
      </Card.Text>
      <span className="profile"><img src={profile2} alt="Profile"></img>  Sarah West</span>
      <span className="eye"><AiOutlineEye  />1.4k views <svg width="42" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="share">
            <rect width="42" height="36" rx="2" fill="#EDEEF0"/>
            <path d="M25.5 21.06C24.93 21.06 24.42 21.285 24.03 21.6375L18.6825 18.525C18.72 18.3525 18.75 18.18 18.75 18C18.75 17.82 18.72 17.6475 18.6825 17.475L23.97 14.3925C24.375 14.7675 24.9075 15 25.5 15C26.745 15 27.75 13.995 27.75 12.75C27.75 11.505 26.745 10.5 25.5 10.5C24.255 10.5 23.25 11.505 23.25 12.75C23.25 12.93 23.28 13.1025 23.3175 13.275L18.03 16.3575C17.625 15.9825 17.0925 15.75 16.5 15.75C15.255 15.75 14.25 16.755 14.25 18C14.25 19.245 15.255 20.25 16.5 20.25C17.0925 20.25 17.625 20.0175 18.03 19.6425L23.37 22.7625C23.3325 22.92 23.31 23.085 23.31 23.25C23.31 24.4575 24.2925 25.44 25.5 25.44C26.7075 25.44 27.69 24.4575 27.69 23.25C27.69 22.0425 26.7075 21.06 25.5 21.06Z" fill="#2D2D2D"/>
            </svg></span>
    </Card.Body>
  </Card>

  <Card >
    <Card.Img variant="top" src={post3} />
    <Card.Body>
    <img src={meetup} className="art-img" alt="Article"></img>
      <Card.Title className="p-title">Finance & Investment Elite Social Mixer @Lujiazui<span className="d3"><HiDotsHorizontal /></span></Card.Title>
      
      <span><svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.8333 2.49992H13V0.833252H11.3333V2.49992H4.66667V0.833252H3V2.49992H2.16667C1.24167 2.49992 0.508333 3.24992 0.508333 4.16659L0.5 15.8333C0.5 16.7499 1.24167 17.4999 2.16667 17.4999H13.8333C14.75 17.4999 15.5 16.7499 15.5 15.8333V4.16659C15.5 3.24992 14.75 2.49992 13.8333 2.49992ZM13.8333 15.8333H2.16667V6.66658H13.8333V15.8333ZM3.83333 8.33325H8V12.4999H3.83333V8.33325Z" fill="black"/>
        </svg>  Fri, 12 Oct, 2018</span>

        <span className="date">
        <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.00002 0.666748C2.77502 0.666748 0.166687 3.27508 0.166687 6.50008C0.166687 10.8751 6.00002 17.3334 6.00002 17.3334C6.00002 17.3334 11.8334 10.8751 11.8334 6.50008C11.8334 3.27508 9.22502 0.666748 6.00002 0.666748ZM1.83335 6.50008C1.83335 4.20008 3.70002 2.33342 6.00002 2.33342C8.30002 2.33342 10.1667 4.20008 10.1667 6.50008C10.1667 8.90008 7.76669 12.4918 6.00002 14.7334C4.26669 12.5084 1.83335 8.87508 1.83335 6.50008Z" fill="black"/>
        <path d="M6.00002 8.58341C7.15061 8.58341 8.08335 7.65067 8.08335 6.50008C8.08335 5.34949 7.15061 4.41675 6.00002 4.41675C4.84943 4.41675 3.91669 5.34949 3.91669 6.50008C3.91669 7.65067 4.84943 8.58341 6.00002 8.58341Z" fill="black"/>
        </svg>  Ahmedabad, India</span>

        <Button variant="outline-primary" className="btn3">Visit Website</Button>{' '}
      
        <span className="profile"><img src={profile3} alt="Profile"></img>  Ronal Jones</span>
        <span className="eye"><AiOutlineEye />1.4k views <svg width="42" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="share">
            <rect width="42" height="36" rx="2" fill="#EDEEF0"/>
            <path d="M25.5 21.06C24.93 21.06 24.42 21.285 24.03 21.6375L18.6825 18.525C18.72 18.3525 18.75 18.18 18.75 18C18.75 17.82 18.72 17.6475 18.6825 17.475L23.97 14.3925C24.375 14.7675 24.9075 15 25.5 15C26.745 15 27.75 13.995 27.75 12.75C27.75 11.505 26.745 10.5 25.5 10.5C24.255 10.5 23.25 11.505 23.25 12.75C23.25 12.93 23.28 13.1025 23.3175 13.275L18.03 16.3575C17.625 15.9825 17.0925 15.75 16.5 15.75C15.255 15.75 14.25 16.755 14.25 18C14.25 19.245 15.255 20.25 16.5 20.25C17.0925 20.25 17.625 20.0175 18.03 19.6425L23.37 22.7625C23.3325 22.92 23.31 23.085 23.31 23.25C23.31 24.4575 24.2925 25.44 25.5 25.44C26.7075 25.44 27.69 24.4575 27.69 23.25C27.69 22.0425 26.7075 21.06 25.5 21.06Z" fill="#2D2D2D"/>
            </svg></span>
    </Card.Body>
  </Card>

  <Card >
    <Card.Body>
    <img src={job} className="art-img" alt="Article"></img>
      <Card.Title className="p-title">Software Developer<span className="d32"><HiDotsHorizontal /></span></Card.Title>
      
      <span><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.6667 4.00008V2.33341H7.33332V4.00008H10.6667ZM2.33332 5.66675V14.8334H15.6667V5.66675H2.33332ZM15.6667 4.00008C16.5917 4.00008 17.3333 4.74175 17.3333 5.66675V14.8334C17.3333 15.7584 16.5917 16.5001 15.6667 16.5001H2.33332C1.40832 16.5001 0.666656 15.7584 0.666656 14.8334L0.67499 5.66675C0.67499 4.74175 1.40832 4.00008 2.33332 4.00008H5.66666V2.33341C5.66666 1.40841 6.40832 0.666748 7.33332 0.666748H10.6667C11.5917 0.666748 12.3333 1.40841 12.3333 2.33341V4.00008H15.6667Z" fill="black"/>
        </svg> Innovaccer Analytics Private Ltd.</span>
        <span className="date"><svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.00002 0.666748C2.77502 0.666748 0.166687 3.27508 0.166687 6.50008C0.166687 10.8751 6.00002 17.3334 6.00002 17.3334C6.00002 17.3334 11.8334 10.8751 11.8334 6.50008C11.8334 3.27508 9.22502 0.666748 6.00002 0.666748ZM1.83335 6.50008C1.83335 4.20008 3.70002 2.33342 6.00002 2.33342C8.30002 2.33342 10.1667 4.20008 10.1667 6.50008C10.1667 8.90008 7.76669 12.4918 6.00002 14.7334C4.26669 12.5084 1.83335 8.87508 1.83335 6.50008Z" fill="black"/>
        <path d="M6.00002 8.58341C7.15061 8.58341 8.08335 7.65067 8.08335 6.50008C8.08335 5.34949 7.15061 4.41675 6.00002 4.41675C4.84943 4.41675 3.91669 5.34949 3.91669 6.50008C3.91669 7.65067 4.84943 8.58341 6.00002 8.58341Z" fill="black"/>
        </svg>  Noida, India</span>

        <Button variant="outline-primary" className="btn4">Apply on Timesjobs</Button>{' '}

        <span className="profile"><img src={profile4} alt="Profile"></img>  Joseph Gray</span>
      <span className="eye"><AiOutlineEye  />1.4k views <svg width="42" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="share">
            <rect width="42" height="36" rx="2" fill="#EDEEF0"/>
            <path d="M25.5 21.06C24.93 21.06 24.42 21.285 24.03 21.6375L18.6825 18.525C18.72 18.3525 18.75 18.18 18.75 18C18.75 17.82 18.72 17.6475 18.6825 17.475L23.97 14.3925C24.375 14.7675 24.9075 15 25.5 15C26.745 15 27.75 13.995 27.75 12.75C27.75 11.505 26.745 10.5 25.5 10.5C24.255 10.5 23.25 11.505 23.25 12.75C23.25 12.93 23.28 13.1025 23.3175 13.275L18.03 16.3575C17.625 15.9825 17.0925 15.75 16.5 15.75C15.255 15.75 14.25 16.755 14.25 18C14.25 19.245 15.255 20.25 16.5 20.25C17.0925 20.25 17.625 20.0175 18.03 19.6425L23.37 22.7625C23.3325 22.92 23.31 23.085 23.31 23.25C23.31 24.4575 24.2925 25.44 25.5 25.44C26.7075 25.44 27.69 24.4575 27.69 23.25C27.69 22.0425 26.7075 21.06 25.5 21.06Z" fill="#2D2D2D"/>
            </svg></span>
    </Card.Body>
  </Card>

</CardColumns> 
               
            </>
        </div>
    )
}
