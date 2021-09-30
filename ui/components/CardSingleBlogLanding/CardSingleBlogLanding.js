import NextLink from "../../elements/NextLink";
import Image from "next/image";
import env from "../../../helpers/env";
import { formatDate } from "../../../helpers/utils";

export default function CardSingleBlogLanding(props) {
  const { title, description, date, poster, link } = props;
  const pureLink =  link ? `/blog/${link}` : `#`
  return (
    <div className="inline-block py-4 w-full text-center">
      {date && 
        <p className="mb-1 text-xs font-semibold text-gray-600 font-serif">
          {formatDate(date)}
        </p>
      || null}
      <NextLink href={pureLink}>
        <div className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-pink-800">
          <span className="text-xl font-bold font-serif leading-4">{title || '-'}</span>
        </div>
      </NextLink>
      <div className="block">
        <NextLink href={pureLink}>
          <div className="inline-grid w-full max-w-screen-sm">
            <Image
              className="rounded"
              src={poster ? poster.url : env.NO_IMAGE}
              alt=""
              width={poster ? poster.width : env.NO_IMAGE_SIZE}
              height={poster ? poster.height : env.NO_IMAGE_SIZE}
              objectFit="cover"
              layout="responsive"
              quality={100}
            />
          </div>
        </NextLink>
      </div>
      <div className="block pt-3 w-full mx-auto max-w-screen-lg">
        {description && <div className="font-serif" dangerouslySetInnerHTML={{ __html: description.html }} /> || null}
      </div>
    </div>
  );
}