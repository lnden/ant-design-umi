import Link from 'umi/link';

function FreeHeroItem({ data, thisIndex, onItemHover, itemHover }) {
    if (!data || !data.ename) return null;
    return (
        <Link to={`/herodetails/${data.ename}`}>
            <img
                onMouseEnter={() => {
                    itemHover !== thisIndex && onItemHover(thisIndex);
                }}   //步骤7 需要
                style={{
                    borderRadius: '5px',
                    height: '69px',
                    margin: '5px',
                    width: itemHover === thisIndex ? '224px' : '69px',
                }}
                src={`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${data.ename}/${data.ename}${
                    itemHover === thisIndex ? '-freehover.png' : '.jpg'
                    }`}
                alt={data.cname}
            />
        </Link>
    );
}

export default FreeHeroItem;
