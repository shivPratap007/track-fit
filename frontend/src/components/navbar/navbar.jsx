import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function Navbar() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Track Fit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Get Started
          </MenubarItem>
          <MenubarItem>
            Login
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email link</MenubarItem>
              <MenubarItem>Messages</MenubarItem>
              <MenubarItem>Notes</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>GitHub</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>About</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Login</MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  )
}
