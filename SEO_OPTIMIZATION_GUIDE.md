# WalletWeaver - SEO Optimization Guide

## Overview
This document outlines all SEO improvements implemented to help WalletWeaver rank higher in search engine results and gain better visibility across the web.

---

## 1. Meta Tags & Head Optimization

### Primary Meta Tags
- **Title Tag**: "WalletWeaver - Blockchain Wallet Intelligence Platform"
  - Includes primary keyword
  - Under 60 characters for optimal display
  - Brand name included for recognition

- **Meta Description**: Comprehensive description under 160 characters
  - Includes target keywords: wallet clustering, entity profiles, smart money tracking
  - Compelling call-to-action
  - Mentions target audience: funds, protocols, research teams

- **Meta Keywords**: Relevant long-tail keywords
  - blockchain wallet, wallet clustering, on-chain intelligence
  - entity profiling, smart money tracking, crypto analytics
  - fund tracking, wallet graph, DeFi analytics

### Search Engine Instructions
- `robots` meta: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
  - Allows full indexing
  - Enables rich snippets and image search
- `revisit-after`: 7 days (encourages frequent crawling)
- `canonical`: https://walletweaver.com (prevents duplicate content issues)

---

## 2. Open Graph Tags (Social Sharing)

```html
<meta property="og:type" content="website" />
<meta property="og:url" content="https://walletweaver.com/" />
<meta property="og:title" content="WalletWeaver - Blockchain Wallet Intelligence Platform" />
<meta property="og:description" content="..." />
<meta property="og:image" content="https://walletweaver.com/og-image.png" />
<meta property="og:site_name" content="WalletWeaver" />
```

**Benefits:**
- Better appearance when shared on Facebook, LinkedIn, Twitter
- Improves click-through rates from social media
- Rich preview cards with image and description
- **TODO**: Create og-image.png (1200x630px) with WalletWeaver branding

---

## 3. Twitter Card Tags

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@walletweaver" />
<meta name="twitter:creator" content="@walletweaver" />
```

**Benefits:**
- Optimized display on Twitter/X
- Large image format for better engagement
- Proper attribution to company and creators
- **TODO**: Set up @walletweaver Twitter account

---

## 4. Structured Data (JSON-LD)

### SoftwareApplication Schema
Helps Google understand WalletWeaver as a business application:
```json
{
  "@type": "SoftwareApplication",
  "name": "WalletWeaver",
  "applicationCategory": "BusinessApplication",
  "offers": {"price": "0", "priceCurrency": "USD"},
  "aggregateRating": {"ratingValue": "5", "ratingCount": "1"}
}
```

### Organization Schema
Establishes company identity:
```json
{
  "@type": "Organization",
  "name": "WalletWeaver",
  "url": "https://walletweaver.com",
  "email": "founders@walletweaver.com",
  "contactPoint": {"contactType": "General Inquiry"}
}
```

### WebSite Schema
Enables search functionality recognition:
```json
{
  "@type": "WebSite",
  "name": "WalletWeaver",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://walletweaver.com/search?q={search_term_string}"
  }
}
```

**Benefits:**
- Rich snippets in search results
- Better understanding by search engines
- Increases CTR (click-through rate)
- Enables knowledge graph inclusion

---

## 5. Robots.txt

Location: `/public/robots.txt` (served as `/robots.txt`)

**Purpose:**
- Controls search engine crawling behavior
- Points to sitemap location
- Blocks unnecessary directories (node_modules, dist, .env)
- Specific rules for Googlebot, Bingbot, DuckDuckBot, etc.

**Content Highlights:**
```
User-agent: *
Allow: /
Sitemap: https://walletweaver.com/sitemap.xml
```

---

## 6. Sitemap.xml

Location: `/public/sitemap.xml` (served as `/sitemap.xml`)

**Purpose:**
- Helps search engines discover all pages
- Specifies page priority and update frequency
- Improves crawlability

**Included Pages:**
- Home page (priority 1.0, weekly updates)
- Features section (priority 0.8, monthly updates)
- Pricing section (priority 0.8, monthly updates)
- FAQ section (priority 0.7, monthly updates)

**Submit to:**
- Google Search Console: https://search.google.com/search-console
- Bing Webmaster Tools: https://www.bing.com/toolbox/webmaster
- Add to XML sitemap index if needed

---

## 7. Web App Manifest

Location: `/public/site.webmanifest` (referenced in HTML)

**Purpose:**
- Makes site installable as Progressive Web App (PWA)
- Improves mobile discoverability
- Enables "Add to Home Screen" functionality

**Benefits:**
- Better mobile SEO ranking
- Increased user engagement
- App-like experience on mobile devices

---

## 8. Performance Optimization for SEO

### Core Web Vitals (Affects Google Ranking)
- **Largest Contentful Paint (LCP)**: Currently ~2.8s (optimize images/fonts)
- **First Input Delay (FID)**: Minimize JavaScript
- **Cumulative Layout Shift (CLS)**: Prevent unexpected layout shifts

### Preconnect & DNS Prefetch
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="dns-prefetch" href="https://www.google-analytics.com" />
```

**Benefits:**
- Faster resource loading
- Improved page speed (critical for ranking)
- Better user experience

### Current Build Size
- HTML: 4.96 KB (gzip: 1.39 KB) ✅
- CSS: 18.62 KB (gzip: 4.10 KB) ✅
- JS: 166.58 KB (gzip: 51.89 KB) ⚠️ (consider code splitting for improvement)

---

## 9. Next Steps for Further Optimization

### Immediate (Priority 1)
1. **Create OG Image** (1200x630px)
   - Design professional image with WalletWeaver branding
   - Include key value proposition
   - Upload to https://walletweaver.com/og-image.png

2. **Submit Sitemap to Search Engines**
   - Google Search Console
   - Bing Webmaster Tools
   - Add to robots.txt (already done)

3. **Setup Google Analytics**
   - Add GA4 tracking code
   - Monitor traffic, bounce rate, conversions
   - Track user behavior

4. **Setup Google Search Console**
   - Verify domain ownership
   - Monitor indexing status
   - Check search performance
   - Monitor for manual actions

### Medium (Priority 2)
1. **Content Optimization**
   - Add H2/H3 tags for better structure
   - Include LSI keywords naturally
   - Add internal linking strategy
   - Create blog posts for long-tail keywords

2. **Link Building**
   - Reach out to crypto media (Decrypt, CoinDesk, etc.)
   - Get featured on relevant SaaS directories
   - Build backlinks from authority sites

3. **Local SEO** (if applicable)
   - Add Google Business Profile
   - Include location in schema markup
   - Add address to footer

4. **Mobile Optimization**
   - Test on Google Mobile-Friendly Test
   - Optimize touch targets
   - Improve mobile loading speed

### Long-term (Priority 3)
1. **Content Marketing**
   - Create educational blog posts
   - Develop whitepapers on wallet intelligence
   - Create case studies
   - Publish research reports

2. **Technical SEO**
   - Implement breadcrumb schema
   - Add FAQ schema for FAQ section
   - Implement video schema if adding demos
   - Create AMP versions (optional)

3. **International SEO** (if expanding)
   - Add hreflang tags for multi-language
   - Create language-specific versions
   - Add geo-targeting

---

## 10. Monitoring & Maintenance

### Tools to Use
1. **Google Search Console**
   - Monitor indexing
   - Check search performance
   - Fix errors/warnings

2. **Google Analytics 4**
   - Track user behavior
   - Monitor conversions
   - Analyze traffic sources

3. **SEMrush / Ahrefs** (Premium)
   - Keyword research
   - Backlink analysis
   - Competitor analysis

4. **Lighthouse** (Built-in)
   - Performance audits
   - SEO score
   - Accessibility checks

### Monthly Tasks
- Review Google Search Console data
- Check Core Web Vitals
- Analyze top pages and keywords
- Monitor rankings for target keywords
- Update sitemap with new content
- Check for broken links

---

## 11. Target Keywords Strategy

### Primary Keywords (High Priority)
- blockchain wallet intelligence
- wallet clustering
- on-chain analytics
- entity profiling

### Secondary Keywords
- smart money tracking
- crypto fund tracking
- DeFi analytics
- wallet graph visualization

### Long-tail Keywords (Lower Volume, Higher Intent)
- blockchain wallet clustering software
- on-chain intelligence platform
- entity recognition blockchain
- smart money signals crypto

### Competitor Keywords to Track
- Nansen alternatives
- Arkham Intelligence alternatives
- Breadcrumbs blockchain
- On-chain analytics platforms

---

## 12. Current SEO Score Summary

✅ **Implemented:**
- All essential meta tags
- Structured data (JSON-LD)
- Robots.txt and Sitemap
- Open Graph tags
- Twitter Card tags
- Web App Manifest
- Performance optimization
- Mobile responsive design
- Fast load times

⚠️ **Needs Implementation:**
- OG image (1200x630px)
- Google Analytics 4
- Google Search Console setup
- Social proof/testimonials schema
- Blog content for SEO

---

## Contact & Support

For SEO improvements or questions:
- Email: founders@walletweaver.com
- Twitter: @walletweaver

---

**Last Updated**: November 25, 2025
**Version**: 1.0
