import Image from "next/image";
import NextLink from "../../elements/NextLink";
import { formatDate } from "../../../helpers/utils";

function CardBlog(props) {
  const { title, description, date, image, imageWidth, imageHeight, link } = props;
  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded" style={{backgroundColor: "#f8e9e8"}}>
      <div className="block">
        <NextLink href={link}>
          <div className="inline-grid w-full h-56">
            <Image
              className="rounded"
              src={image}
              alt=""
              width={imageWidth}
              height={imageHeight}
              objectFit="cover"
              layout="responsive"
              quality={100}
            />
          </div>
        </NextLink>
      </div>
      <div className="inline-block py-4">
        {date && 
          <p className="mb-1 text-xs font-semibold text-gray-600 font-serif">
            {formatDate(date)}
          </p>
        || null
        }
        <NextLink href={link}>
          <div className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-pink-800">
            <span className="text-xl font-bold font-serif leading-4">{title}</span>
          </div>
        </NextLink>
        {description && 
          <p className="mb-4 text-gray-700 font-serif">{description}</p>
        || null}
        {/* <div className="flex space-x-4">
          <a>
            <div className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
              >
                <polyline
                  points="6 23 1 23 1 12 6 12"
                  fill="none"
                  strokeMiterlimit="10"
                />
                <path
                  d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                />
              </svg>
            </div>
            <p className="font-semibold">7.4K</p>
          </a>
          <a>
            <div className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
              >
                <polyline
                  points="23 5 23 18 19 18 19 22 13 18 12 18"
                  fill="none"
                  strokeMiterlimit="10"
                />
                <polygon
                  points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                />
              </svg>
            </div>
            <p className="font-semibold">81</p>
          </a>
        </div> */}
      </div>
    </div>
  )
}

export default CardBlog;