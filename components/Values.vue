<template>
  <base-section v-bind="$attrs">
    <template #header>
      Values
    </template>
    <template #content>
      <headered-section :primary="!$attrs.primary">
        <template #header>
          Reflectivity
        </template>
        <template #description>
          <p>
            One of the most important obligations of being an intellectual is
            being critical. Regardless of the subject, the willingness to
            reflect on one's surroundings lays the foundation for meaningful
            criticism.
          </p>
          <p>
            I dedicated much of my time for this activity, to realize patterns
            and habits that I don't like in myself or my surroudnings. One of my
            favorite ex-bosses always says that a reflection is like a present
            &ndash; once given, the receiver will decide what to do with it.
          </p>
          <p>
            Elon Musk also sees this as something very valuable:
          </p>
          <blockquote>
            Constantly seek criticism. A well thought out critique of whatever
            you’re doing is as valuable as gold.
          </blockquote>
        </template>
      </headered-section>
      <headered-section :primary="!$attrs.primary">
        <template #header>
          Transparency
        </template>
        <template #description>
          <p>
            I believe it's extremely important to know where each party stands
            in a certain situation, be that a working relationship with a
            company, a long friendship or a waitress at a restaurant. Honest and
            clear communication of intents and expectations can prevent a
            tremendous amount of conflict in the long run.
          </p>
          <p>
            I have always valued truth above being nice. That of course does not
            mean that one should be inconsiderate, insensitive or arrogant, but
            it does mean being true even when it hurts.
          </p>
        </template>
      </headered-section>
      <headered-section :primary="!$attrs.primary">
        <template #header>
          Reliability
        </template>
        <template #description>
          <p>
            A century ago a scientist like Einstein had to come along and do a
            lifetime of research to deserve the attributive 'brilliant'.
            Nowadays a mediocre cat video is enough for that. We have inflated
            our language and parallel to that we have inflated ourselves. A few
            decades ago, word was bond, and not respecting verbal aggreements
            meant status loss in the local culture - consider the idiom 'man of
            his word'. Later, words started to dissolve and handshake was 'the
            bond'. If people shook hand on something, that served as a
            guarantee. Nowadays even that seems to be mostly gone and we are
            left with hand signed contracts. I however take things very
            seriously when it comes to all of these. For example, I am always on
            time when it comes to scheduled meetings, regardless of its
            importance or the other party. If for some reason that is not the
            case, I make sure to inform them as soon as possible. That is true
            of how I work as well, regarding unforseen complications.
          </p>
        </template>
      </headered-section>
      <headered-section :primary="!$attrs.primary">
        <template #header>
          Ambitiousness
        </template>
        <template #description>
          <p>
            Whatever you do, you should do it with all your heart. You should be
            relentless in searching for different ways to flourish in that
            space. You should be very careful of dreaming small, because
            whenever you imagine a goal for yourself, you simultaniously declare
            a boundary.
          </p>
          <p>
            The following quote from Elon Musk expresses the mentality of
            dreaming big perfectly:
          </p>
          <blockquote>
            Life can't just be about solving one miserable problem after
            another. There have to be reasons that when you wake up in the
            morning you look forward to being alive, you're excited about the
            future.
          </blockquote>
        </template>
      </headered-section>
      <headered-section :primary="!$attrs.primary">
        <template #header>
          Adaptibility
        </template>
        <template #description>
          <p>
            To quote Dr. Robert Ford from Westworld:
          </p>
          <blockquote>
            Evolution forged the entirety of sentient of life on this planet
            using one tool – the mistake.
          </blockquote>
          <p>
            Another quote to continue the arc, this is from Grant Cardone:
          </p>
          <blockquote>
            You'll always be punished for being comfortable.
          </blockquote>
          <p>
            I try to live in a way where correcting mistakes is more desirable
            than staying in the comfort zone. Some people say "just a few more
            years to go" after spending a lifetime with some activity. I feel
            this is a good recipe for an unfullfilled life and I go against that
            as well as I can by questioning even foundational things and I
            quickly adapt to environmental changes.
          </p>
        </template>
      </headered-section>
    </template>
  </base-section>
</template>

<script>
import BaseSection from '~/components/BaseSection'
import HeaderedSection from '~/components/HeaderedSection'

export default {
  components: {
    BaseSection,
    HeaderedSection
  }
}
</script>

<style lang="less"></style>
