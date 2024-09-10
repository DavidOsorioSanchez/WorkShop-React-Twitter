import NavbarMain from "@components/main/NavbarMain.jsx"
import CardMain from "@components/main/CardMain.jsx"
import CardsGroups from "@components/main/CardsGroups.jsx"
import "./main.css"

export default function Main() {
    return (
        <main>
            <NavbarMain />
            <section className="main-content">
                <CardsGroups>
                    <CardMain
                        name="Kevin wilfred mejia"
                        userName="kwmejia"
                        time="3m"
                        picture="https://picsum.photos/200/200"
                        reply={true}
                        replyPerson="Maria Alejandra Manosalva"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptates, quia, voluptas, tempore, doloremque, velit, deleniti quisquam, quibusdam, voluptatem, consequuntur, dolorem, fugiat excepturi, voluptate, quis, consequatur, dolores, quaerat, quos"
                        likes={10}
                        comments={5}
                        numberReplay={1}
                    />
                    <CardMain
                        name="Liliana Maria Colorado"
                        userName="LilianaMaria"
                        time="2s"
                        picture="https://picsum.photos/200/30"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptates, quia, voluptas, tempore, doloremque, velit, deleniti quisquam, quibusdam, voluptatem, consequuntur, dolorem, fugiat excepturi, voluptate, quis, consequatur, dolores, quaerat, quos"
                        likes={4}
                        comments={1}
                        numberReplay={2}
                        imageDescription="https://picsum.photos/200/100"
                    />
                </CardsGroups>
                <CardsGroups>
                    <CardMain
                        name="Viviana Gallardo"
                        userName="VivianaGallardo"
                        time="3 days"
                        picture="https://picsum.photos/200/300"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptates, quia, voluptas, tempore, doloremque, velit, deleniti quisquam, quibusdam, voluptatem, consequuntur, dolorem, fugiat excepturi, voluptate, quis, consequatur, dolores, quaerat, quos"
                        likes={15}
                        comments={2}
                        numberReplay={3}
                    />
                </CardsGroups>
                <CardsGroups>
                    <CardMain
                        name="Maria Alejandra Manosalva"
                        userName="MariaManosalva"
                        time="2 days"
                        getPronoms={true}
                        pronoms="[She/Her]"
                        picture="https://picsum.photos/200/150"
                        reply={true}
                        replyPerson="Stiven Loaiza"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptates, quia, voluptas, tempore, doloremque, velit, deleniti quisquam, quibusdam, voluptatem, consequuntur, dolorem, fugiat excepturi, voluptate, quis, consequatur, dolores, quaerat, quos"
                        likes={9}
                        comments={3}
                        numberReplay={2}
                        imageDescription="https://picsum.photos/200/500"
                    />
                    <CardMain
                        name="Stiven Loaiza"
                        userName="StivenLoaiza"
                        time="1 days"
                        picture="https://picsum.photos/200/350"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptates, quia, voluptas, tempore, doloremque, velit, deleniti quisquam, quibusdam, voluptatem, consequuntur, dolorem, fugiat excepturi, voluptate, quis, consequatur, dolores, quaerat, quos"
                        likes={2}
                        comments={1}
                        numberReplay={0}
                    />
                </CardsGroups>


            </section>
        </main>
    )
}