'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CalendarDays } from "lucide-react"

interface ArticleCardProps {
  title: string
  excerpt: string
  date: string
  author: {
    name: string
    avatarUrl?: string
  }
  readMoreUrl: string
}

export function ArticleCard({
  title = "The Future of Web Development",
  excerpt = "Exploring the latest trends and technologies shaping the landscape of web development in the coming years.",
  date = "2023-11-15",
  author = {
    name: "Alex Johnson",
    avatarUrl: "/placeholder.svg?height=40&width=40"
  },
  readMoreUrl = "#"
}: ArticleCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const authorInitials = author.name.split(' ').map(n => n[0]).join('').toUpperCase()

  return (
    <Card className="w-full max-w-md overflow-hidden">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{excerpt}</p>
        <div className="flex items-center space-x-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src={author.avatarUrl} alt={author.name} />
            <AvatarFallback>{authorInitials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{author.name}</p>
            <div className="flex items-center text-xs text-muted-foreground">
              <CalendarDays className="mr-1 h-3 w-3" />
              {formattedDate}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <a href={readMoreUrl}>Read More</a>
        </Button>
      </CardFooter>
    </Card>
  )
}