import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar"

export default function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/mksingh-ui.png" alt="@mksingh" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
