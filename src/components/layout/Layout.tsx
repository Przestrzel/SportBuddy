interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return <main className="width-100">{children}</main>;
}

export default Layout;
