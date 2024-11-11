import React from 'react'
// import {Avatar, } from '../components/ui/avatar'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { AvatarImage } from '@radix-ui/react-avatar'
// import { Mail } from 'lucide-react'
import avatarUrl from "../public/alhaithem2.jpg"
// import users  from '../users/users'
import { ArticleCard } from '@/components/article-card'

const author = { name:"Khalid", avatarUrl}

const page = () => {
  return (
    // <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  px-4"'>
    //   {users.map((user,index) => {
    //     return(
    //           <Card key={index} className="w-full max-w-md">
    //   <CardHeader className="flex flex-row items-center gap-4">
    //     <Avatar className="h-12 w-12">
    //       <AvatarImage src={avatarUrl} alt="avatar" />
    //     </Avatar>
    //     <div className="flex flex-col">
    //       <CardTitle className="text-lg">{user.name}</CardTitle>
    //       <div className="flex items-center text-sm text-muted-foreground">
    //         <Mail
    //          className="mr-2 h-4 w-4" />
    //         <span>{user.email}</span>
    //       </div>
    //     </div>
    //   </CardHeader>
    //   <CardContent>
    //     <p className="text-sm text-muted-foreground">
    //       User information card displaying name and email.
    //     </p>
    //   </CardContent>
    // </Card>
    //     )
    //   })}
    // </div>
    <div>  
      <ArticleCard author={author} date='10/11/2022' title='The Future of Web Development
' readMoreUrl='https://daily.dev/'  />
    </div>
  )
}

export default page
