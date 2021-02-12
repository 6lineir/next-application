import Link from "next/link";

import {
    Button,
    Container,
    Card,
    Dropdown,
    Grid,
    Header,
    Image,
    Icon,
    Menu,
    Message
  } from "semantic-ui-react";
const Posts = props => {
    
    return (
        <Container className="App"> 
        <Grid stackable padded columns={4} textAlign="center">
                        
                        <Grid.Column >
                            <Card>
                                <Image src="/img/Bitcoin-P2P.svg"  width="300px"/>
                                <Card.Content>
                                    <Card.Header>post Title</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>Time create</span>
                                    </Card.Meta>
                                    <Card.Description>Body Post</Card.Description>
                                    <Link href="/blog/[id]" ><Button size="mini" color="violet" >See Post</Button></Link>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column >
                            <Card>
                                <Image src="/img/Bitcoin-P2P.svg"  width="300px"/>
                                <Card.Content>
                                    <Card.Header>post Title</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>Time create</span>
                                    </Card.Meta>
                                    <Card.Description>Body Post</Card.Description>
                                    <Link href="/blog/[id]" ><Button size="mini" color="violet" >See Post</Button></Link>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column >
                            <Card>
                                <Image src="/img/Bitcoin-P2P.svg"  width="300px"/>
                                <Card.Content>
                                    <Card.Header>post Title</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>Time create</span>
                                    </Card.Meta>
                                    <Card.Description>Body Post</Card.Description>
                                    <Link href="/blog/[id]" ><Button size="mini" color="violet" >See Post</Button></Link>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column >
                            <Card>
                                <Image src="/img/Bitcoin-P2P.svg"  width="300px"/>
                                <Card.Content>
                                    <Card.Header>post Title</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>Time create</span>
                                    </Card.Meta>
                                    <Card.Description>Body Post</Card.Description>
                                    <Link href="/blog/[id]" ><Button size="mini" color="violet" >See Post</Button></Link>
                                </Card.Content>
                            </Card>
                        </Grid.Column>


        </Grid>
       </Container>
    )
}

export default Posts;