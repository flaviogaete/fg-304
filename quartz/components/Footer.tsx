import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
          <a href="https://www.instagram.com/flaviogaete/" target="_blank" rel="noopener noreferrer" style="margin-right: 1em">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="1.5em" height="1.5em">
              <path d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
            </svg>
          </a>
          <a href="https://vimeo.com/flaviogaete" target="_blank" rel="noopener noreferrer" style="margin-right: 1em">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="1.5em" height="1.5em">
              <path d="M543.8 217.6C541.8 261.2 511.4 320.9 452.4 396.7C391.5 475.9 340 515.5 297.8 515.5C271.7 515.5 249.6 491.4 231.5 443.2C196.3 314 181.3 238.3 152.2 238.3C148.8 238.3 137.1 245.4 117 259.4L96 232.2C147.6 186.9 196.9 136.5 227.8 133.7C262.7 130.3 284.1 154.2 292.2 205.2C320.9 386.7 333.6 414.1 385.8 331.9C404.5 302.3 414.6 279.8 416 264.3C420.8 218.4 380.2 221.5 352.7 233.3C374.7 161.2 416.8 126.2 478.9 128.2C524.7 129.4 546.4 159.3 543.8 217.6z"/>
            </svg>
          </a>  
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
       
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor

// {i18n(cfg.locale).components.footer.createdWith}{" "}
{/* <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © {year} */}