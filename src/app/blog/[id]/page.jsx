import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return notFound();
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            aliquam impedit ad et quisquam similique ab molestias nam sed in,
            excepturi vero, beatae maiores, totam nesciunt aliquid assumenda id
            iusto!
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/18185921/pexels-photo-18185921/free-photo-of-lifeguard.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Jhon Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/18185921/pexels-photo-18185921/free-photo-of-lifeguard.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus eos
          ut, nulla vitae eveniet architecto! Delectus dolores quia velit,
          nostrum numquam inventore possimus dicta eum cum reiciendis impedit
          quod ad. Similique minima soluta, voluptatibus, quae earum magnam quam
          illum impedit, laboriosam consectetur inventore. Cupiditate corrupti
          praesentium cumque vel eos consequuntur minima cum suscipit, sequi at
          nostrum repellat esse qui. Explicabo! Accusantium aut odit facere
          incidunt aliquid necessitatibus et consequuntur animi nihil
          repellendus, fuga suscipit asperiores! Earum, non ipsa iste explicabo,
          similique eius optio molestias consectetur ex exercitationem eaque
          perspiciatis illo? Qui dicta esse recusandae. Repudiandae incidunt
          dolorum nostrum ratione porro rem sunt recusandae quam quas! Adipisci
          fugiat temporibus, placeat dolorum voluptatibus nisi quas corrupti
          nobis minima consequatur laudantium reiciendis ratione. At architecto
          sint eius labore, modi et placeat eaque rem expedita fuga. Tenetur
          voluptatem ullam, expedita voluptates non dolorem, facere ab fugiat,
          repellat consectetur hic nisi totam mollitia vero cupiditate!
          <br /> <br />
          Laboriosam ipsum officia veniam culpa animi sapiente dolore nulla
          facere hic, velit cumque perspiciatis ipsam corporis tempora inventore
          omnis itaque quasi facilis! Commodi dolore placeat esse minima, nulla
          atque adipisci. Nobis officia cumque dolores, vitae corrupti molestias
          nulla quas deserunt dolorem. Quasi, culpa, explicabo alias nisi
          temporibus modi ut consequatur recusandae saepe quas dolorem
          voluptatum natus. Ut voluptates harum quidem? Nesciunt adipisci vel
          quidem labore nobis, temporibus culpa repellendus aliquid cupiditate
          praesentium earum laudantium asperiores incidunt rem qui sapiente
          inventore quam id provident excepturi consectetur velit dolorem?
          Recusandae, minus corporis? Nesciunt esse, consequuntur voluptatibus
          alias iure dolorum molestiae eos quo officia commodi? Corrupti
          expedita placeat hic, labore eum eveniet laborum, incidunt
          exercitationem suscipit consequuntur soluta quae omnis officiis ad ab.
          Atque, corporis perferendis! Aliquid voluptates enim quia! Sequi
          laborum totam nisi, molestias iste, maiores nostrum quos fugiat esse
          debitis labore quia assumenda doloribus? Magnam enim ipsa ullam
          provident iusto! Voluptas! Amet voluptate officiis autem excepturi
          error, facere earum sequi vero quaerat repudiandae labore est alias
          maiores? In ut illum architecto, nemo molestiae voluptates culpa
          delectus asperiores quo omnis amet consectetur.
          <br /> <br />
          Temporibus magni deserunt mollitia, necessitatibus quia velit!
          Inventore consequatur sit ut cupiditate dolorum nam officiis,
          voluptatum, hic minus distinctio mollitia minima ullam facilis
          sapiente eum saepe reiciendis ipsum praesentium molestiae? Illo
          aperiam consectetur eius dolorum commodi sed deserunt quam dolorem
          temporibus culpa doloremque aut magni dignissimos, debitis aliquam
          quisquam accusamus, velit itaque blanditiis aspernatur? Aut totam
          saepe architecto consequuntur quibusdam. Sed fugiat tempore laboriosam
          animi. Unde pariatur laboriosam sapiente rerum nesciunt possimus nisi,
          consectetur expedita consequuntur adipisci nemo, tempora laudantium
          eum omnis! Reiciendis fugiat neque aut suscipit quia ipsum corrupti.
          Incidunt porro eius in, provident veniam omnis. Nihil labore corrupti
          est harum deserunt minima alias. Et impedit recusandae ducimus id cum
          a perspiciatis est laboriosam, itaque voluptatum! Nostrum, modi id?
          Nisi, neque. Explicabo, quos veniam, sapiente, debitis dolores aut
          provident sequi alias molestiae nihil distinctio reprehenderit
          repudiandae nulla excepturi dicta suscipit. Fugiat tenetur optio
          assumenda sed nostrum eius hic ullam! Eum dicta impedit autem
          quibusdam, maxime error nulla at sunt amet, voluptatum reprehenderit
          provident culpa. Iste aliquid aliquam magnam ipsa qui velit optio
          repellendus repudiandae perspiciatis, facere officia amet quisquam.
          Reprehenderit, molestias
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
