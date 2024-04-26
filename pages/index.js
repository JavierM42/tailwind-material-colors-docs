import Head from "next/head";
import InteractiveElementExample from "../components/InteractiveElementExample";
import InteractiveElementExplanation from "../components/InteractiveElementExplanation";
import TryDynamicColor from "../components/TryDynamicColor";
import { useState } from "react";

export default function Home() {
  const [showControls, setShowControls] = useState(false);

  return (
    <>
      <Head>
        <title>Tailwind Material Colors</title>
        <meta
          name="description"
          content="TailwindCSS plugin to use the Material 3 Color System with Tailwind, including Dynamic Color support."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#00a300" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <main className="max-w-3xl px-4 py-20 mx-auto">
        <h1 className="flex text-transparent bg-gradient-to-r bg-clip-text from-secondary via-tertiary-container to-inverse-primary drop-shadow">
          Tailwind Material Colors
          <span className="inline-block text-4xl font-bold ml-1 mt-9">v3</span>
        </h1>
        <ul className="flex items-center justify-center gap-3 mb-12 font-bold -mt-4">
          <li>
            <a
              href="https://npmjs.com/package/tailwind-material-colors"
              target="_blank"
              rel="noreferrer"
            >
              npm
            </a>
          </li>
          <li>
            <a
              href="https://github.com/JavierM42/tailwind-material-colors"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>

        <p>
          A{" "}
          <a href="https://tailwindcss.com" target="_blank" rel="noreferrer">
            TailwindCSS
          </a>{" "}
          plugin to use the{" "}
          <a href="https://m3.material.io/" target="_blank" rel="noreferrer">
            Material Design 3
          </a>{" "}
          Color System with Tailwind, with Dynamic Color support.
        </p>

        <h2>Key features</h2>
        <ul className="space-y-2 list-disc">
          <li>Generate a color theme from a theme name and base color.</li>
          <li>Customize contrast and/or secondary colors.</li>
          <li>
            Automatic dark mode, no need to use the <code>dark:</code> variant.
          </li>
          <li>
            Easy and consistent interaction states (hover, press, focus,
            disabled) with the <code>interactive-bg-</code> classes.
          </li>
          <li>Extra colors will be harmonized to the primary color.</li>
          <li>Dynamic Color: easily update theme dynamically on the client.</li>
        </ul>
        <h2>Installation & Usage</h2>
        <pre>
          <code>npm install --save-dev tailwind-material-colors</code>
        </pre>
        <div className="inline-block px-2 py-1 mt-4 font-mono text-lg font-bold border-b rounded-t text-tertiary bg-surface-variant border-outline/20">
          tailwind.config.js
        </div>
        <code className="block mb-6 rounded-tl-none shadow-inner bg-surface-variant text-secondary">
          <div>
            {
              "const { withMaterialColors } = require('tailwind-material-colors');"
            }
          </div>
          <br />
          <div>{"const config = {"}</div>
          <div className="pl-6 text-outline/70">// Your tailwind config.</div>
          <div>{"};"}</div>
          <br />
          <div>{"module.exports = withMaterialColors(config, {"}</div>
          <div className="pl-6 text-outline/70">
            // Your base colors as HEX values. 'primary' is required.
          </div>
          <div className="pl-6">primary: '#ff0000',</div>
          <div className="pl-6 text-outline/70">
            // secondary and/or tertiary are optional, if not set they will be
            derived from the primary color.
          </div>
          <div className="pl-6">secondary: '#ffff00',</div>
          <div className="pl-6">tertiary: '#0000ff',</div>
          <div className="pl-6 text-outline/70">
            // add any named colors you need:
          </div>
          <div className="pl-6">green: '#00ff00'</div>
          <div className="pl-6">blue: '#0000ff'</div>
          <div>{"},"}</div>
          <div>{"{,"}</div>
          <div className="pl-6 text-outline/70">
            /* one of 'content', 'expressive', 'fidelity', 'monochrome',
            'neutral', 'tonalSpot' or 'vibrant' */
          </div>
          <div className="pl-6">{"scheme: 'content',"}</div>
          <div className="pl-6 text-outline/70">
            // contrast is optional and ranges from -1 (less contrast) to 1
            (more contrast).
          </div>
          <div className="pl-6">{"contrast: 0,"}</div>
          <div>{"});"}</div>
        </code>
        <p>
          The colors you supply will be transformed by M3. In the example
          configuration above, where the provided <code>primary</code>{" "}
          <i>base</i> color is <code className="text-[#ff0000]">pure red</code>,
          the resulting primary colors won't be, but they <i>will</i> have a red
          hue. This is an intentional effect of the M3 algorithm in the interest
          of good contrast ratios and pleasing aesthetics.
        </p>
        <p>
          If you don't want a color to be harmonized to the primary color, pass{" "}
          <code>{`{ hex: "#xxxxxx", harmonize: false }`}</code> as the value
          instead of the plain hex color.
        </p>
        <h2>What do I get?</h2>
        <h3>
          <span className="text-secondary">1.</span> A Tailwind color palette
        </h3>
        <p>
          The plugin will generate a color palette, structured like the one from
          the{" "}
          <a href="https://material-foundation.github.io/material-theme-builder/">
            Material Theme Builder
          </a>
          .
        </p>
        <div className="grid gap-1 grid-cols-4 text-xs mb-4" id="palette">
          <div className="bg-primary h-20 px-1 py-0.5">Primary</div>
          <div className="bg-secondary h-20 px-1 py-0.5">Secondary</div>
          <div className="bg-tertiary h-20 px-1 py-0.5">Tertiary</div>
          <div className="bg-error h-20 px-1 py-0.5">Error</div>

          <div className="bg-on-primary text-primary h-6 px-1 py-0.5">
            On Primary
          </div>
          <div className="bg-on-secondary text-secondary h-6 px-1 py-0.5">
            On Secondary
          </div>
          <div className="bg-on-tertiary text-tertiary h-6 px-1 py-0.5">
            On Tertiary
          </div>
          <div className="bg-on-error text-error h-6 px-1 py-0.5">On Error</div>

          <div className="bg-primary-container h-20 px-1 py-0.5">
            Primary Container
          </div>
          <div className="bg-secondary-container h-20 px-1 py-0.5">
            Secondary Container
          </div>
          <div className="bg-tertiary-container h-20 px-1 py-0.5">
            Tertiary Container
          </div>
          <div className="bg-error-container h-20 px-1 py-0.5">
            Error Container
          </div>

          <div className="bg-on-primary-container text-primary-container h-6 px-1 py-0.5">
            On Primary Container
          </div>
          <div className="bg-on-secondary-container text-secondary-container h-6 px-1 py-0.5">
            On Secondary Container
          </div>
          <div className="bg-on-tertiary-container text-tertiary-container h-6 px-1 py-0.5">
            On Tertiary Container
          </div>
          <div className="bg-on-error-container text-error-container h-6 px-1 py-0.5">
            On Error Container
          </div>

          <div className="bg-surface-dim h-20 px-1 py-0.5">Surface Dim</div>
          <div className="bg-surface h-20 px-1 py-0.5">Surface</div>
          <div className="bg-surface-bright h-20 px-1 py-0.5">
            Surface Bright
          </div>
          <div className="bg-inverse-surface h-20 px-1 py-0.5">
            Inverse Surface
          </div>

          <div className="col-span-3 grid grid-cols-5 gap-1">
            <div className="bg-surface-container-loset h-20 px-1 py-0.5">
              Surface Container Lowest
            </div>
            <div className="bg-surface-container-low h-20 px-1 py-0.5">
              Surface Container Low
            </div>
            <div className="bg-surface-container h-20 px-1 py-0.5">
              Surface Container
            </div>
            <div className="bg-surface-container-high h-20 px-1 py-0.5">
              Surface Container High
            </div>
            <div className="bg-surface-container-highest h-20 px-1 py-0.5">
              Surface Container Highest
            </div>
          </div>
          <div className="space-y-1">
            <div className="bg-on-inverse-surface h-6 px-1 py-0.5">
              On Inverse Surface
            </div>
            <div className="bg-surface-variant h-6 px-1 py-0.5">
              Surface Variant
            </div>
            <div className="bg-inverse-primary surface h-6 px-1 py-0.5">
              Inverse Primary
            </div>
          </div>

          <div className="bg-on-surface text-surface h-6 px-1 py-0.5">
            On Surface
          </div>
          <div className="bg-on-surface-variant text-surface-variant h-6 px-1 py-0.5">
            On Surface Variant
          </div>
          <div className="bg-outline text-on-surface h-6 px-1 py-0.5">
            Outline
          </div>
          <div className="bg-outline-variant text-on-surface h-6 px-1 py-0.5">
            Outline Variant
          </div>
        </div>

        {showControls && <TryDynamicColor />}

        <p>
          The generated colors can be used with any of Tailwind's usual
          utilities (such as <code>bg-</code>, <code>text-</code>,{" "}
          <code>border-</code>, <code>fill-</code>, <code>stroke-</code>, or{" "}
          <code>shadow-</code>).
        </p>

        <h3>
          <span className="text-secondary">2.</span> Automatic surface/content
          color pairs
        </h3>
        <p>
          Most of the colors on the palette have an <i>on-color</i> counterpart.{" "}
          <code>on-X</code> is the default color of content inside an element
          with background color <code>X</code>.
        </p>
        <div className="flex gap-8 mb-6">
          <div className="flex-1">
            <p>
              For example, an element with a <code>primary-container</code>{" "}
              background will get <code>on-primary-container</code> content.
            </p>
            <p>
              A <code>bg-</code> class will suffice to style both background and
              text color on most use cases.
            </p>
          </div>
          <figure className="relative flex flex-col items-center justify-center flex-1 w-1/2 px-2 py-1 bg-primary-container">
            <div className="text-center">
              Text color is <code>on-primary-container</code> by default
            </div>
            <div className="absolute text-xs bottom-2 right-2">
              .bg-primary-container
            </div>
          </figure>
        </div>
        <ul className="space-y-2 mb-4">
          <li className="bg-surface-container-high p-2 rounded">
            All the surface colors set <code>on-surface</code> as their text
            color, except for <code>surface-variant</code>.
          </li>
          <li className="bg-surface-container-high p-2 rounded">
            <i>on-colors</i> won't set the content color when used as a
            background.
          </li>
          <li className="bg-surface-container-high p-2 rounded">
            Text color will not be set when using opacity modifiers (such as{" "}
            <code>bg-primary/50</code>). You can specify text color manually or
            use <code>bg-primary bg-opacity-50</code> instead.
          </li>
        </ul>
        <h3>
          <span className="text-secondary">3.</span> Automatic dark mode
        </h3>
        <p>
          All the generated colors have both light and dark mode shades. Based
          on your defined{" "}
          <a
            href="https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually"
            target="_blank"
            rel="noreferrer"
          >
            Dark Mode Strategy
          </a>
          , be it CSS <code>prefers-color-scheme</code> or a custom selector,
          they will change automatically. There's no need to use the{" "}
          <code>dark:</code> variant.
        </p>
        <p>You can try it right here:</p>
        <div className="flex justify-center mb-8">
          <button
            className="px-4 py-2 font-bold rounded-md shadow shadow-primary/30 interactive-bg-primary"
            onClick={() => document.body.classList.toggle("dark")}
          >
            Toggle Dark Mode
          </button>
        </div>
        <h3>
          <span className="text-secondary">4.</span> Interaction states
        </h3>
        <p>
          This plugin provides easy to use interaction states that follow the{" "}
          <a
            href="https://m3.material.io/foundations/interaction-states"
            target="_blank"
            rel="noreferrer"
          >
            M3 guidelines
          </a>
          . For every color with an <i>on-color</i> counterpart, an{" "}
          <code>interactive-bg-</code> utility will be generated.
        </p>
        <p>
          Interactive elements use the concept of state layers: on hover or
          focus, the background color is overlayed with the on-color at certain
          amount of opacity (8% on hover, 12% on press and focus, and 16% on
          drag).
        </p>
        <InteractiveElementExplanation />
        <div className="flex gap-8 mb-6">
          <div className="flex-1 h-32">
            <p>
              This is achieved without CSS pseudoelements by directly changing
              the background color to the expected result.
            </p>
          </div>
          <div className="flex flex-col flex-1 w-1/2">
            <InteractiveElementExample />
          </div>
        </div>
        <details className="px-4 py-2 mb-8 border rounded-lg border-outline/20 bg-tertiary-container bg-opacity-30">
          <summary className="text-lg font-medium cursor-pointer">
            All interactive colors
          </summary>

          <div className="grid gap-1 grid-cols-4 text-xs my-2">
            <div className="interactive-bg-primary h-20 px-1 py-0.5">
              .interactive-bg-primary
            </div>
            <div className="interactive-bg-secondary h-20 px-1 py-0.5">
              .interactive-bg-secondary
            </div>
            <div className="interactive-bg-tertiary h-20 px-1 py-0.5">
              .interactive-bg-tertiary
            </div>
            <div className="interactive-bg-error h-20 px-1 py-0.5">
              .interactive-bg-error
            </div>

            <div className="interactive-bg-primary-container h-20 px-1 py-0.5">
              .interactive-bg-primary-container
            </div>
            <div className="interactive-bg-secondary-container h-20 px-1 py-0.5">
              .interactive-bg-secondary-container
            </div>
            <div className="interactive-bg-tertiary-container h-20 px-1 py-0.5">
              .interactive-bg-tertiary-container
            </div>
            <div className="interactive-bg-error-container h-20 px-1 py-0.5">
              .interactive-bg-error-container
            </div>

            <div className="interactive-bg-surface-dim h-20 px-1 py-0.5">
              .interactive-bg-surface-dim
            </div>
            <div className="interactive-bg-surface h-20 px-1 py-0.5">
              .interactive-bg-surface
            </div>
            <div className="interactive-bg-surface-bright h-20 px-1 py-0.5">
              .interactive-bg-surface-bright
            </div>
            <div className="interactive-bg-inverse-surface h-20 px-1 py-0.5">
              .interactive-bg-inverse-surface
            </div>

            <div className="col-span-4 grid grid-cols-6 gap-1">
              <div className="interactive-bg-surface-container-lowest h-20 px-1 py-0.5">
                .interactive-bg-surface-container-lowest
              </div>
              <div className="interactive-bg-surface-container-low h-20 px-1 py-0.5">
                .interactive-bg-surface-container-low
              </div>
              <div className="interactive-bg-surface-container h-20 px-1 py-0.5">
                .interactive-bg-surface-container
              </div>
              <div className="interactive-bg-surface-container-high h-20 px-1 py-0.5">
                .interactive-bg-surface-container-high
              </div>
              <div className="interactive-bg-surface-container-highest h-20 px-1 py-0.5">
                .interactive-bg-surface-container-highest
              </div>
              <div className="interactive-bg-surface-variant h-20 px-1 py-0.5">
                .interactive-bg-surface-variant
              </div>
            </div>
          </div>
        </details>
        <p>
          For drag states, use JavaScript to apply the{" "}
          <code>dragged-bg-primary</code> class instead of{" "}
          <code>interactive-bg-primary</code> while the element is being
          dragged.
        </p>
        <h2>Plugin configuration</h2>
        <h3>Extending the Tailwind color palette</h3>
        <p>
          The plugin will add colors to the <code>theme.colors</code> key of
          your Tailwind config. Any custom colors already defined there will
          remain if there are no name conflicts, but as per the Tailwind docs,
          this disables the default Tailwind color palette. If you wish to keep
          it, add <code>{"{ extend: true }"}</code> within the third argument of
          the
          <code>withMaterialColors</code> call.
        </p>
        <code className="block mb-6 shadow-inner bg-surface-variant text-secondary">
          {
            "module.exports = withMaterialColors(config, colors, { scheme: 'content', extend: true });"
          }
        </code>
        <h2>Dynamic Color</h2>
        <p>
          You can update the generated theme at runtime, directly on client-side
          JavaScript, with the <code>updateTheme</code> function.
        </p>
        {!showControls && (
          <div className="flex justify-center mb-8">
            <button
              className="px-4 py-2 font-bold rounded-md shadow shadow-primary/30 interactive-bg-primary"
              onClick={() => {
                document
                  .getElementById("palette")
                  .scrollIntoView({ behavior: "smooth" });
                setShowControls(true);
              }}
            >
              Try Dynamic Color
            </button>
          </div>
        )}
        <div className="inline-block px-2 py-1 mt-4 font-mono text-lg font-bold border-b rounded-t text-tertiary bg-surface-variant border-outline/20">
          example.js
        </div>
        <code className="block mb-6 rounded-tl-none shadow-inner bg-surface-variant text-secondary">
          <div>
            {
              'import { updateTheme } from "tailwind-material-colors/lib/updateTheme.esm";'
            }
          </div>
          <br />
          <div>{"const makeThemeRed = () => {"}</div>
          <div className="pl-6">{"updateTheme({"}</div>
          <div className="pl-12 text-outline/70">
            // set a new primary color (and optionally any other colors in your
            theme)
          </div>
          <div className="pl-12">primary: '#ff0000',</div>
          <div className="pl-12">green: '#00ff00'</div>
          <div className="pl-6">{"},"}</div>
          <div className="pl-6 text-outline/70">
            // second argument is your chosen dark mode strategy (usually
            'media' or 'class')
          </div>
          <div className="pl-6">'media',</div>
          <div className="pl-6 text-outline/70">
            // third argument is the scheme
          </div>
          <div className="pl-6">'tonalSpot'</div>
          <div className="pl-6 text-outline/70">
            // fourth argument specifies contrast (optional)
          </div>
          <div className="pl-6">0</div>
          <div>{");"}</div>
        </code>

        <p>
          It's recommended to set all colors when changing <code>primary</code>{" "}
          because the <i>harmonize</i> feature (on by default) will affect the
          resulting shades.
        </p>

        <ul className="space-y-2 mb-4">
          <li className="bg-surface-container-high p-2 rounded">
            <code>updateTheme</code> can't create new colors, only update
            existing ones.
          </li>
          <li className="bg-surface-container-high p-2 rounded">
            ⚠The <code>updateTheme</code> function is around 85KB. If possible,
            load it asynchronously to reduce load times.
          </li>
        </ul>
      </main>
      <footer className="text-center py-10">
        Made with ❤️ by{" "}
        <a href="https://javiermorales.dev" target="_blank" rel="noreferrer">
          Javier Morales
        </a>
      </footer>
    </>
  );
}
