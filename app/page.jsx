// Homepage. Content comes from data/content.js.

import ProfilePhoto from "@/components/ProfilePhoto";
import Greeting from "@/components/Greeting";
import SmartLink from "@/components/SmartLink";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import Icon from "@/components/Icon";
import {
  profile,
  heroButtons,
  featuredWorks,
  timeline,
  interests,
  socials,
  getWork,
} from "@/data/content";

export default function HomePage() {
  const featured = featuredWorks.map(getWork).filter(Boolean);

  return (
    <>
      <section className="hero reveal">
        <ProfilePhoto />
        <div className="hero-text">
          <Greeting />
          <p className="hero-roles">{profile.roles.join(" · ")}</p>
          <ul className="hero-details">
            {profile.details.map((d) => (
              <li key={d.text}>
                {d.icon && <Icon name={d.icon} size={15} />}
                {d.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <p className="bio reveal" style={{ "--d": 1 }}>
        {profile.bio}
      </p>

      <div className="hero-buttons reveal" style={{ "--d": 2 }}>
        {heroButtons.map((b) => (
          <SmartLink key={b.label} href={b.href} className={`pill${b.primary ? " pill-primary" : ""}`}>
            <Icon name={b.icon} size={16} />
            {b.label}
            {b.primary && <Icon name="arrowRight" size={15} className="pill-arrow" />}
          </SmartLink>
        ))}
      </div>

      <section className="section reveal" style={{ "--d": 3 }} aria-labelledby="featured-heading">
        <h2 id="featured-heading">Featured works</h2>
        <FeaturedCarousel works={featured} />
      </section>

      <section className="section reveal" style={{ "--d": 4 }} aria-labelledby="timeline-heading">
        <h2 id="timeline-heading">Timeline</h2>
        <ol className="timeline">
          {timeline.map((t, i) => (
            <li key={t.years + t.role} className={i === 0 ? "is-current" : undefined}>
              <span className="timeline-years">{t.years}</span>
              <span>
                {t.role}, {t.place}
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section className="section reveal" style={{ "--d": 5 }} aria-labelledby="love-heading">
        <h2 id="love-heading">Things I love</h2>
        <ul className="chips">
          {interests.map((x) => (
            <li key={x} className="chip">
              {x}
            </li>
          ))}
        </ul>
      </section>

      <section className="section reveal" style={{ "--d": 6 }} aria-labelledby="web-heading">
        <h2 id="web-heading">On the web</h2>
        <div className="social-grid">
          {socials.map((s) => (
            <SmartLink key={s.platform} href={s.href} className="social-card">
              <Icon name={s.icon} size={22} />
              <span>
                <span className="social-platform">{s.platform}</span>
                <span className="social-handle">{s.handle}</span>
              </span>
            </SmartLink>
          ))}
        </div>
      </section>
    </>
  );
}
