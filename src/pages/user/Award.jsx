/* eslint-disable react/no-unescaped-entities */
import award from "../../assets/img/award.png";
export default function Award() {
  return (
    <div className="min-h-screen pt-28">
      <h1 className="font-bold text-xl lg:text-3xl text-center text-primary">
        NIO'S AWARD & PRESS
      </h1>
      <div className="flex lg:flex-row flex-col-reverse items-center  justify-center gap-2">
        <p className="lg:w-1/2 text-lg ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          quod, temporibus deleniti rem, excepturi est amet itaque placeat et
          aperiam iusto commodi eveniet odit odio praesentium fuga reprehenderit
          sed soluta incidunt. Deleniti perspiciatis suscipit odio doloribus
          enim modi beatae omnis nihil distinctio. Porro maxime architecto
          minima, libero aliquid voluptatibus nisi velit, sequi doloremque quam
          molestiae, cum doloribus! Earum at totam molestiae. Qui voluptatem vel
          facilis minima, illo consequuntur architecto repellendus. In
          dignissimos quam fugit cumque officiis laudantium numquam
          exercitationem architecto esse non temporibus, vero tempora impedit
          ducimus pariatur libero voluptatem, doloremque illo sed! A officia
          mollitia perferendis facere voluptate atque!
        </p>
        <img
          className="h-[20rem]  lg:w-[30rem] w-[20rem] lg:h-[30rem] "
          src={award}
          alt=""
        />
      </div>
    </div>
  );
}
