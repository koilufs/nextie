import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail } from "lucide-react"

interface UserCardProps {
  name?: string
  email?: string
  avatarUrl?: string
}

export default function Component({ 
  name = "John Doe", 
  email = "john@example.com", 
  avatarUrl = "/placeholder.svg?height=40&width=40" 
}: UserCardProps) {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase()

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <CardTitle className="text-lg">{name}</CardTitle>
          <div className="flex items-center text-sm text-muted-foreground">
            <Mail className="mr-2 h-4 w-4" />
            <span>{email}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          User information card displaying name and email.
        </p>
      </CardContent>
    </Card>
  )
}