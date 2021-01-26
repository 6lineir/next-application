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
        <Grid stackable padded columns={3}>
                        
                        <Grid.Column >
                            <Card>
                                <Image src="/img/321.png"  />
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
                                <Image src="/img/321.png"  />
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
                                <Image src="/img/321.png"  />
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
                                <Image src="/img/321.png"  />
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
                                <Image src="/img/321.png"  />
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