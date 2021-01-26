import Link from "next/link";
import {
  Button,
  Container,
  Grid,
  Icon,
  Image
} from "semantic-ui-react";

const Custom404 = () => {
  return (
    <Container>
      <Grid textAlign="center">
      <Image src="/img/404.svg" height="400px" />
      </Grid>
      <Grid textAlign="center">
        <Link href="/">
        <Button size="big" color="violet">Home</Button>
        </Link>
        <Link href="/about">
        <Button size="big" color="orange">Call Me</Button>
        </Link>
      </Grid>
    </Container>
  )
}


export default Custom404;