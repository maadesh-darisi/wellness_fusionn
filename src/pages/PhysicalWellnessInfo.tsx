import React from 'react';

function PhysicalWellnessInfo() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{ 
        backgroundImage: 'url("https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80")',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(255, 255, 255, 0.9)'
      }}
    >
      <div className="max-w-4xl mx-auto px-4 py-12">
        <article className="prose prose-lg max-w-none bg-white/90 p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">WHAT IS YOGA?</h1>
          <p className="text-gray-600 mb-12">
            While modern media and advertising may have us think that yoga is all about physical poses, the entirety of yoga includes a wide range of contemplative and self-disciplinary practices, such as meditation, chanting, mantra, prayer, breath work, ritual, and even selfless action. The word "yoga" comes from the root word "yuj," which means "to yoke" or "to bind." The word itself has numerous meanings, from an astrological conjunction to matrimony, with the underlying theme being connection. Yoga asana is the physical practice and postures of yoga. The scientific research into yoga's benefits is still somewhat preliminary, but much of the evidence so far supports what practitioners seem to have known for millennia: Yoga is incredibly beneficial to our overall well-being.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-6">BENEFITS OF YOGA</h2>
          
          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Yoga improves flexibility</h3>
              <p className="text-gray-600">
                In 2016, two of yoga's leading organizations, Yoga Journal and Yoga Alliance, conducted a worldwide survey looking at a variety of statistics about yoga in an attempt to quantify its value amid ever-increasing popularity. The most cited reason people selected for doing yoga was to "increase flexibility". Flexibility is an important component of physical health. Yoga offers many styles to choose from, varying in intensity from high to moderate to mild. Even the lowest intensity styles have been found to increase flexibility. Yoga seems to be especially helpful for improving flexibility in adults ages 65 and older. Reduced flexibility is a natural part of aging, and a 2019 study found that yoga both slowed down loss and improved flexibility in older adults.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Yoga helps with stress relief</h3>
              <p className="text-gray-600">
                The American Psychological Association recently shared that 84% of American adults are feeling the impact of prolonged stress. So, it makes sense that the second most cited reason people selected as to why they do yoga was to relieve stress. Thankfully, the science supports that yoga, and especially asana, is excellent at reducing stress. But remember — the physical practice is just one aspect of yoga. Meditation, breath work, and auditory rituals, like chanting and sound baths, have all also been shown to significantly lessen tension and relieve stress.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Yoga improves mental health</h3>
              <p className="text-gray-600">
                Yoga is thought to be one of the most common mental health disorders in the world. A 2017 meta-analysis of 23 interventions looking at the effects of yoga-based treatments on depressive symptoms overwhelmingly concluded that yoga can now be considered an effective alternative treatment for MDD. Both movement-based yoga therapies and breathing-based practices have been shown to significantly improve depressive symptoms.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Yoga may reduce inflammation</h3>
              <p className="text-gray-600">
                Often, the precursor to illness is chronic inflammation. Heart disease, diabetes, arthritis, Crohn's disease, and many other conditions are linked to prolonged inflammation. One review examined 15 research studies and found a common result: Yoga — of various styles, intensities, and durations — reduced the biochemical markers of inflammation across several chronic conditions.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">5. Yoga will likely increase your strength</h3>
              <p className="text-gray-600">
                While most people associate yoga with stretching and flexibility, some types of yoga classes can also be considered strength-building. It just depends on the class level, approach, and teacher. This makes yoga asana a multimodal form of exercise. Yoga's effectiveness at building strength has been studied in several specific contexts — for instance, as it pertains to people with breast cancer, older adults, and children. Another study conducted on air force personnel found yoga to be an effective strength-building practice across many age groups of healthy participants.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">6. Yoga may reduce anxiety</h3>
              <p className="text-gray-600">
                The Anxiety and Depression Association of America recently stated that anxiety disorders may be the most common mental health disorders in the United States. There are a number of different anxiety disorders, such as generalized anxiety disorder, social anxiety, and specific phobias. Even chronic stress can sometimes be categorized as an anxiety disorder. Numerous studies suggest that yoga asana may be effective as an alternative treatment for anxiety disorders, though several of the researchers request additional replicated studies before conclusively stating as much. Yoga nidra, which is a body scan/guided meditation, has been shown to conclusively reduce symptoms of anxiety.
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}

export default PhysicalWellnessInfo;