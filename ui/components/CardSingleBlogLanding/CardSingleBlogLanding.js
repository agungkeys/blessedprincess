import NextLink from "../../elements/NextLink";
import Image from "next/image";
import env from "../../../helpers/env";
import { formatDate } from "../../../helpers/utils";

export default function CardSingleBlogLanding(props) {
  const { title, description, date, poster, images, link, type} = props;
  return (
    <div className="inline-block w-full text-center">
      {type === 1 &&
        <>
          {date && 
            <p className="mb-1 text-xs font-semibold text-gray-600 font-serif">
              {formatDate(date)}
            </p>
          || null}
          <NextLink href={link || '/'}>
            <div className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-pink-800">
              <span className="text-xl font-bold font-serif leading-4">{title || '-'}</span>
            </div>
          </NextLink>
          {poster && 
            <div className="block">
              <NextLink href={link || '/'}>
                <div className="inline-grid w-full max-w-screen-sm">
                  <Image
                    className="rounded"
                    src={poster ? poster.url : env.NO_IMAGE}
                    alt={title || '-'}
                    width={poster ? poster.width : env.NO_IMAGE_SIZE}
                    height={poster ? poster.height : env.NO_IMAGE_SIZE}
                    objectFit="cover"
                    layout="responsive"
                    quality={100}
                  />
                </div>
              </NextLink>
            </div>
          || null}
          
          <div className="block pt-3 w-full mx-auto max-w-screen-md">
            {description && <span className="font-serif">{description}</span> || null}
          </div>
          {link && 
            <div className="block pt-3 w-full mx-auto max-w-screen-md">
              <NextLink href={link || '/'}>
                <button className="px-4 py-2 border border-pink-800 rounded-md shadow-sm text-base font-medium text-pink-800 hover:text-white hover:bg-pink-800">Read More</button>
              </NextLink>
            </div>
          ||null}
        </>
      || null}

      {type === 2 && 
        <>
          <div className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-pink-800">
            <span className="text-xl font-bold font-serif leading-4">{title || '-'}</span>
          </div>
          {images && !!images.length && 
            <div className="block">
              <div className={`inline-grid grid-cols-1 gap-1 md:grid-cols-${images.length} lg:grid-cols-${images.length} md:gap-5 lg:gap-5 w-full max-w-screen-md`}>
                {images && images.map((img) => 
                    <div key={img.id} className="py-2">
                      <Image
                        className="rounded"
                        src={img ? img.url : env.NO_IMAGE}
                        alt={title || '-'}
                        width={img ? img.width : env.NO_IMAGE_SIZE}
                        height={img ? img.height : env.NO_IMAGE_SIZE}
                        objectFit="cover"
                        layout="responsive"
                        quality={100}
                      />
                    </div>
                )}
              </div>
            </div>
          || null}
        </>
      || null}
      
    </div>
  );
}