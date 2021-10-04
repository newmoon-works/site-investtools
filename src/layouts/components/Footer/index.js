import React, { useEffect } from 'react';
import logo from "public/images/new/logo-negative.svg";
import Image from "next/image";
import Link from 'next/link';
import styles from './Footer.module.scss'
import { useRouter } from "next/router";
import Decoration from 'src/components/common/Decoration';
import FooterContactLink from 'src/components/common/FooterContactLink';
import FooterContactInfo from 'src/components/common/FooterContactInfo';
import RecentPosts from '../RecentPosts';

export default function Footer({content, info}) {
  let router = useRouter();
  let home = router.route === '/' || router.route === '/#';

  return (
    <>
      <footer className={styles.footer}>
        <Decoration size="sm" style="white" className={styles.decorBottom} />
        <div className="container caption">
          <div className="row justify-content-between">
            <div className="col-1" />
            <div className={`col-12 col-lg-3 ${styles.footerBox}`}>
              <div>
                <div className={styles.footerLogo}>
                  <Link href="/">
                    <a>
                      <img src={`${process.env.NEXT_PUBLIC_API_URL}${content.firstSection.logo.url}`} alt="Investtools" />
                    </a>
                  </Link>
                </div>
                <div>
                  <p className="caption">{content.firstSection.message}</p>
                  <div className={styles.socials}>
                    <a href={info.linkedinLink} target="_blank" rel="noopener noreferrer">
                      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.7857 1.38003e-06L1.21049 1.05824e-07C0.542634 4.74386e-08 -4.52725e-08 0.517857 -1.00848e-07 1.15357L-1.29792e-06 14.8464C-1.35349e-06 15.4821 0.542633 16 1.21049 16L15.7857 16C16.4536 16 17 15.4821 17 14.8464L17 1.15357C17 0.517859 16.4536 1.43842e-06 15.7857 1.38003e-06ZM5.13795 13.7143L2.6183 13.7143L2.6183 6.07857L5.14174 6.07857L5.14174 13.7143L5.13795 13.7143ZM3.87812 5.03571C3.06987 5.03571 2.41719 4.41786 2.41719 3.66071C2.41719 2.90357 3.06987 2.28571 3.87812 2.28571C4.68259 2.28571 5.33906 2.90357 5.33906 3.66071C5.33906 4.42143 4.68638 5.03571 3.87812 5.03571ZM14.5828 13.7143L12.0632 13.7143L12.0632 10C12.0632 9.11429 12.0442 7.975 10.754 7.975C9.44107 7.975 9.23995 8.93929 9.23995 9.93571L9.23995 13.7143L6.72031 13.7143L6.72031 6.07857L9.1375 6.07857L9.1375 7.12143L9.17165 7.12143C9.50937 6.52143 10.3328 5.88929 11.5585 5.88929C14.1085 5.88929 14.5828 7.47143 14.5828 9.52857L14.5828 13.7143Z" fill="#00B5A5" /></svg>
                    </a>
                    <a href={info.instagramLink} target="_blank" rel="noopener noreferrer">
                      <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.43583 3.65419C10.5641 3.65419 12.2808 5.37125 12.2808 7.5C12.2808 9.62875 10.5641 11.3458 8.43583 11.3458C6.30755 11.3458 4.59087 9.62875 4.59087 7.5C4.59087 5.37125 6.30755 3.65419 8.43583 3.65419ZM8.43583 10.0003C9.81117 10.0003 10.9355 8.879 10.9355 7.5C10.9355 6.121 9.81452 4.99972 8.43583 4.99972C7.05713 4.99972 5.93611 6.121 5.93611 7.5C5.93611 8.879 7.06048 10.0003 8.43583 10.0003V10.0003ZM3.53677 3.49688C3.53677 3.99559 3.93834 4.3939 4.43359 4.3939C4.9322 4.3939 5.33042 3.99225 5.33042 3.49688C5.33042 3.00151 4.92885 2.59985 4.43359 2.59985C3.93834 2.59985 3.53677 3.00151 3.53677 3.49688ZM0.990204 4.40729C1.04709 3.20568 1.32149 2.1413 2.20158 1.26436C3.07832 0.387426 4.14246 0.112964 5.3438 0.0527167C6.58195 -0.0175722 10.293 -0.0175722 11.5312 0.0527167C12.7292 0.109617 13.7933 0.384079 14.6734 1.26102C15.5535 2.13796 15.8246 3.20233 15.8848 4.40394C15.9551 5.64236 15.9551 9.35429 15.8848 10.5927C15.8279 11.7943 15.5535 12.8587 14.6734 13.7356C13.7933 14.6126 12.7325 14.887 11.5312 14.9473C10.293 15.0176 6.58195 15.0176 5.3438 14.9473C4.14246 14.8904 3.07832 14.6159 2.20158 13.7356C1.32484 12.8587 1.05044 11.7943 0.990204 10.5927C0.91993 9.35429 0.91993 5.64571 0.990204 4.40729V4.40729ZM2.58976 11.9215C2.85077 12.5775 3.35607 13.083 4.0153 13.3474C5.00247 13.739 7.34492 13.6486 8.43583 13.6486C9.52674 13.6486 11.8725 13.7356 12.8564 13.3474C13.5122 13.0863 14.0175 12.5809 14.2819 11.9215C14.6734 10.9341 14.5831 8.59115 14.5831 7.5C14.5831 6.40885 14.6701 4.06253 14.2819 3.07849C14.0209 2.42246 13.5156 1.91705 12.8564 1.65263C11.8692 1.26102 9.52674 1.35139 8.43583 1.35139C7.34492 1.35139 4.99913 1.26436 4.0153 1.65263C3.35942 1.9137 2.85412 2.41911 2.58976 3.07849C2.19824 4.06588 2.28859 6.40885 2.28859 7.5C2.28859 8.59115 2.19824 10.9375 2.58976 11.9215Z" fill="#00B5A5" /></svg>
                    </a>
                    <strong>{content.firstSection.socialsMsg}</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className={`col-12 col-lg-4 d-flex justify-content-center ${styles.footerBox}`}>
              <div id="footer-info">
                <h5>{content.secondSection.title}</h5>
                {
                  home ? <FooterContactLink content={content.secondSection} /> : <FooterContactInfo info={info} />
                }
              </div>
            </div>

            <div className={`col-12 col-lg-3 ${styles.footerBox}`}>
              <div>
                <h5>{content.thirdSection.title}</h5>
                <RecentPosts quantity={2} />
              </div>
            </div>
            <div className="col-1" />
          </div>
        </div>
      </footer>

      <div className={styles.footerBottom}>{content.copyright}</div>
    </>
  )
}