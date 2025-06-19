# Ayurvedic Blog Generation Prompt (USA Market)

## Overview
This prompt template helps generate premium, subscription-worthy Ayurvedic blog posts that rival the best $100/month Substack publications. Every article should deliver exceptional value that readers would gladly pay for - combining deep expertise, exclusive insights, and transformative knowledge for American audiences.

## Step 1: Topic Discovery
If no topic is provided, research recent Ayurvedic developments:
- Look for recent studies on traditional herbs (Ashwagandha, Turmeric, Tulsi, etc.)
- Seasonal wellness practices aligned with current time of year
- Modern applications of ancient Ayurvedic principles
- Sustainable/ethical sourcing of Ayurvedic ingredients
- Integration of Ayurveda with modern lifestyle

## Step 2: Research Phase
For the chosen topic, gather information from:
- Peer-reviewed research papers (PubMed, Google Scholar)
- Traditional Ayurvedic texts (Charaka Samhita, Sushruta Samhita references)
- Reputable Ayurvedic institutions (AYUSH Ministry, established schools)
- Recent news from credible wellness publications

## Step 3: Premium Blog Structure (Substack Quality)
Create content that readers would pay $100/month to access:

### Title
- Compelling and transformation-focused
- Promise specific, valuable outcomes
- Create curiosity gap that demands reading
- Examples: "The $5,000 Wellness Protocol I Discovered in Ancient Texts" or "Why Silicon Valley CEOs Are Secretly Using This 5,000-Year-Old Stress Solution"

### Introduction (200-250 words)
- Start with a powerful story or counterintuitive insight
- Establish your unique angle/exclusive information
- Promise specific transformations or revelations
- Build trust with credentials or personal experience
- Create FOMO - what will readers miss if they don't read this?

### Main Content (2500-3500 words)
Deliver deep, actionable value across 6-8 sections:

1. **The Exclusive Hook** (What 99% Don't Know)
   - Little-known facts from classical texts
   - Insider secrets from Ayurvedic clinics
   - What traditional practitioners won't tell you

2. **The Science Deep-Dive** (Latest Research)
   - Cutting-edge studies others haven't found
   - Mechanisms of action explained clearly
   - Why it works at molecular/cellular level
   - Include specific study details, sample sizes, outcomes

3. **The Advanced Protocol** (Exact Implementation)
   - Step-by-step instructions with precise timing
   - Dosage calculations based on body weight/constitution
   - Synergistic combinations for 10x results
   - Monthly/seasonal adjustment strategies
   - Troubleshooting common mistakes

4. **The Insider's Buying Guide** (Save Money & Get Results)
   - Specific brands that actually work
   - Red flags in fake products
   - Cost-per-result analysis
   - Where practitioners source their supplies
   - DIY options for premium results

5. **Case Studies & Transformations**
   - Real people's detailed journeys
   - Before/after biomarkers
   - Unexpected benefits discovered
   - Failures and how they pivoted

6. **The Advanced Practitioner Section**
   - What I learned from interviewing 10 experts
   - Controversial approaches that work
   - Future trends in Ayurvedic medicine
   - How to customize for your unique situation

### Conclusion (250-300 words)
- Summarize the transformation available
- Reiterate exclusive value provided
- Clear next steps with timeline
- Tease next article's exclusive content
- Strong CTA to implement immediately
- Create urgency around taking action

## Step 4: Writing Guidelines

### Tone and Voice (Premium Substack Standard)
- Authoritative yet accessible - position as insider knowledge
- Include personal anecdotes and case studies
- Share "behind the scenes" insights others don't know
- Write like you're advising a close friend who pays for exclusive advice
- Balance ancient wisdom with cutting-edge research
- Include specific protocols, exact dosages, timing strategies
- Address skepticism by acknowledging it and providing proof

### Language Rules (FDA Compliance)
- NO direct medical claims or disease treatment promises
- Use FDA-compliant language: "may support", "traditionally used for", "research suggests"
- Include standard US disclaimer: "These statements have not been evaluated by the FDA"
- Reference American research when possible
- Use US measurements (teaspoons, cups, Fahrenheit)

### SEO Optimization
- Primary keyword in title, first paragraph, and 2-3 times naturally
- Use related LSI keywords throughout
- Meta description: 150-160 characters
- Include internal links to related topics

## Step 5: Image Generation & Verification

### IMPORTANT: Avoid Infographics
- DO NOT generate infographics with text or data visualizations (AI often renders text incorrectly)
- Focus on artistic illustrations, product photography, and visual compositions instead

### Hero Image
Use generate-image.js with specific prompts:
```bash
./generate-image.js -f blog-hero-[topic] -s 1792x1024 -q hd "Minimalist watercolor illustration of [specific herbs/concept], soft earth tones, white background, professional wellness blog aesthetic"
```

### Supporting Images
For ingredient or product images:
```bash
./generate-image.js -f blog-support-[topic] -s 1024x1024 "Photo-realistic [specific item/process], natural lighting, wooden surface, minimalist composition, high-end wellness product photography style"
```

### Lifestyle/Process Images
For showing routines or practices:
```bash
./generate-image.js -f blog-lifestyle-[topic] -s 1024x1024 "Elegant lifestyle photo showing [specific practice/routine], soft natural lighting, minimalist wellness aesthetic, premium quality"
```

### Image Verification Process
1. **Generate the image** using appropriate prompt
2. **Visually inspect** each image before using:
   - Check for visual accuracy and quality
   - Ensure no garbled text or incorrect symbols
   - Verify it matches the intended concept
3. **If image is problematic**:
   - Delete the image: `rm /path/to/image.png`
   - Regenerate with improved prompt (be more specific)
   - If still unsuccessful after 2 attempts, proceed without that image
4. **Only use verified images** in the blog post

## Step 6: Premium Content Quality Checklist
Ensure Substack-worthy quality:
- [ ] Would someone pay $100/month for this insight?
- [ ] Contains information not freely available elsewhere
- [ ] Includes specific protocols/strategies worth 10x the subscription
- [ ] All claims backed by citations or exclusive sources
- [ ] Personal stories or case studies included
- [ ] Actionable takeaways in every section
- [ ] No direct medical claims but clear health optimization strategies
- [ ] Exclusive angle that positions as must-read content
- [ ] Dense with value - every paragraph earns its space
- [ ] Professional editing - zero errors
- [ ] Strategic internal links to products and related premium content
- [ ] Creates desire for next article in series

## Step 7: Author Selection
Choose author based on content type:
- **Dr. Kamila Desai-Chen**: Research-heavy articles, medical perspectives, evidence-based content
- **Aria Blackwood**: Lifestyle tips, busy professional guides, practical implementations
- **Marcus Rivera-Gonzalez**: Product education, quality standards, ingredient deep-dives

Rotate authors to maintain variety. See `/content/blog/scripts/author-personas.md` for full profiles.

## Step 8: Implementation
1. Generate blog content using this prompt
2. Select appropriate author from the three personas
3. Create MDX file in `/content/blog/` with format: `YYYY-MM-DD-slug.mdx`
4. Add frontmatter with all required fields including selected author
5. Generate and optimize images
6. Review against quality checklist
7. Test locally before committing

## Example Topics (USA Market)
- "Ashwagandha for the American Workplace: Managing Corporate Stress Naturally"
- "Ayurvedic Solutions for Digital Eye Strain and Tech Neck"
- "The Busy Parent's Guide to Ayurvedic Morning Routines"
- "Turmeric Latte vs Coffee: An Ayurvedic Take on America's Favorite Drinks"
- "From Farm to Supplement: Understanding USDA Organic Ayurvedic Herbs"

## Sample Blog Generation Process

### Example: Winter Wellness Blog

1. **Research Phase**
   - Search: "Ayurveda winter season 2024 research"
   - Find studies on warming herbs, seasonal depression, immunity
   - Reference Charaka Samhita on Hemanta Ritu (winter season)

2. **Content Creation**
   ```markdown
   ---
   title: "Winter Wellness: Ayurvedic Practices for the Cold Season"
   description: "Discover how ancient Ayurvedic wisdom can help busy Americans thrive during winter, with practical tips for immunity and energy."
   date: "2024-01-15"
   author: "Dr. Kamila Desai-Chen"
   category: "Seasonal Wellness"
   tags: ["winter", "immunity", "seasonal-routines", "warming-herbs"]
   image: "/images/blog/blog-hero-winter-wellness.png"
   featured: true
   ---
   ```

3. **Image Generation**
   ```bash
   # Hero image
   ./generate-image.js -f blog-hero-winter-wellness -s 1792x1024 -q hd "Minimalist watercolor illustration of ginger root, cinnamon sticks, and tulsi leaves arranged elegantly, warm golden tones, soft white background, cozy winter wellness aesthetic"
   
   # Infographic
   ./generate-image.js -f blog-infographic-winter-foods -s 1024x1024 -q hd "Clean infographic showing Ayurvedic winter foods chart, warm color palette, icons for root vegetables, warming spices, and grains, modern wellness design with clear sections"
   ```

## Premium Content Standards
- **Value Density**: Every article should save readers 10+ hours of research
- **Exclusive Insights**: Include information from:
  - Direct interviews with practitioners
  - Translation of Sanskrit texts not available online
  - Personal experiments with detailed tracking
  - Access to clinical case studies
  - Insider knowledge from Ayurvedic pharmacies
- **Transformation Focus**: Reader should finish feeling they have:
  - A complete action plan
  - Insider knowledge worth sharing
  - Confidence to implement immediately
  - Excitement for the next article
- **Premium Positioning**: Write as if you're:
  - A private wellness consultant charging $500/hour
  - Sharing secrets usually reserved for elite clients
  - Providing a masterclass worth $2,000
  - Creating content that becomes their health bible

## Notes for Content Creators
- Think Substack newsletters people eagerly await and forward to friends
- Every article should feel like exclusive access to a world-class expert
- Include enough value that readers feel they're getting a steal at $100/month
- Build anticipation for the next piece while over-delivering on current one
- Maintain Pure Prana's position as THE premium source for authentic Ayurvedic wisdom