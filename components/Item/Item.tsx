import Link from "next/link"
import styles from '../../styles/ajyprofile.module.css'


interface Props {
    item: any,
    index: number
}


export const Item = ({ item, index }: Props) => {

    const Navigate = () => {
        <Link href='/'></Link>
    }


    return (
        // <Link href='/'>
            <tr className={styles.KANAT__TOP} onClick={Navigate}>
                <td className={styles.tbody_kanat_td}>0{index + 1}</td>
                <td className={styles.tbody_kanat_td}>{item.flight?.date_from}</td>
                <td className={styles.tbody_kanat_td}> {item.flight?.date_to}</td>
                <td className={styles.tbody_kanat_td}>{item.flight?.airline_detail?.title}</td>
                <td className={styles.tbody_kanat_td}>{item.flight?.routes[0].city_title}...</td>
            </tr>
        // </Link>

    )
}