import Link from "next/link";
import styles from "../../styles/Contact.module.css";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { contacts: data },
  };
};

const Contacts = ({ contacts }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}> Contacts List </h1>
      <ul className={styles.data}>
        {contacts.map(({ id, name }) => {
          return (
            <li key={id}>
              <Link href={`/contacts/${id}`}>
                <p className={styles.contacts}>{name} </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Contacts;


