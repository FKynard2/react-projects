const IMG_URLS = [
    "https://assets.codepen.io/6060109/form-stage-1.png",
    "https://assets.codepen.io/6060109/form-stage-2.png",
    "https://assets.codepen.io/6060109/form-stage-3.png",
    "https://assets.codepen.io/6060109/form-stage-4.png",
    "https://assets.codepen.io/6060109/form-stage-4.png",
];

export default function RightImage({ stage }) {
    let content;

   
        content = (
            <div className="right-image">
                <img src={IMG_URLS[stage]} alt="" />
            </div>
        );
    
    return <>{content}</>;
}
