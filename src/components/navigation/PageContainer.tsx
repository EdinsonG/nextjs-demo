
import { PageContainerProps } from '@/interfaces'

export default function PageContainer(props: Readonly<PageContainerProps>) {
  const { title, description, children } = props;

  return (  
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {children}
    </>
)};

