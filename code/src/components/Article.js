
import './style.css';
export default function Article(data) {

    return (
        <div className='content'>
            <div className="content__item-info">
                <div className="content__item-author">
                    <div className="author__photo"><img src={require('./img/user.jpg')} alt="" /></div>
                    <div className="author__name">{data.author === null ? 'Authors name' : data.author}<span> in</span> Topics Name <span>7 July</span></div>
                </div>
                <div className="content__item-title">{data.title}</div>
                <div className="content__item-describtion">{data.describe === null ? '' : data.describe}</div>
                <div className="info__content">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                </div>
            </div>
            <div className="content__item-img">
                <img src={data.urlToImg !== null ? data.urlToImg : "img/bg.webp"} alt="" />
            </div>
        </div>

    )
};