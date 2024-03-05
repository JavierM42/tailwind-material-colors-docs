import Head from "next/head";
import InteractiveElementExample from "../components/InteractiveElementExample";
import InteractiveElementExplanation from "../components/InteractiveElementExplanation";
import TryDynamicColor from "../components/TryDynamicColor";

export default function Home() {
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

      <main className="max-w-3xl px-4 pt-20 mx-auto">
        <h1 className="text-transparent bg-gradient-to-r bg-clip-text from-tertiary to-secondary via-primary">
          Tailwind Material Colors
        </h1>
        <ul className="flex items-center justify-center gap-3 mb-12 font-bold">
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
          <li>Generate a color theme from one, two or three base colors.</li>
          <li>
            Automatic dark mode, no need to use the <code>dark:</code> variant.
          </li>
          <li>
            Easy and consistent interaction states (hover, press, focus,
            disabled) with <code>interactive-bg-</code>.
          </li>
          <li>
            Extra colors will be harmonized to the primary color (except if
            specified).
          </li>
          <li>
            Dynamic Color: easily update themed dynamically on the client.
          </li>
        </ul>
        <h2>Installation & Usage</h2>
        <pre>
          <code>npm install --save-dev tailwind-material-colors</code>
        </pre>
        <div className="inline-block px-2 py-1 mt-6 font-mono text-lg font-bold border-b rounded-t text-tertiary bg-surface-variant border-outline/20">
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
          <div className="pl-6 text-outline/70">
            // Here, your tailwind config.
          </div>
          <div>{"};"}</div>
          <br />
          <div>{"module.exports = withMaterialColors(config, {"}</div>
          <div className="pl-6 text-outline/70">
            // Here, your base colors as HEX values
          </div>
          <div className="pl-6 text-outline/70">// primary is required</div>
          <div className="pl-6 text-outline/70">
            // secondary and/or tertiary are optional, if not set they will be
            derived from the primary color
          </div>
          <div className="pl-6">primary: '#ff0000',</div>
          <div className="pl-6">secondary: '#ffff00',</div>
          <div className="pl-6">tertiary: '#0000ff',</div>
          <div className="pl-6 text-outline/70">
            // extra named colors may also be included
          </div>
          <div className="pl-6">green: '#00ff00'</div>
          <div className="pl-6">blue: '#0000ff'</div>
          <div>{"});"}</div>
        </code>
        <p>
          The colors you supply will be transformed by M3. In the example
          configuration above, where the provided <code>primary</code>{" "}
          <i>base</i> color is pure red (
          <code className="text-[#ff0000]">#ff0000</code>), the resulting{" "}
          primary colors are <code className="text-[#c00100]">#c00100</code> and{" "}
          <code className="text-[#ffb4a8]">#ffb4a8</code> for light and dark
          mode respectively. This is an intentional effect of the M3 algorithm
          in the interest of good contrast ratios and pleasing aesthetics.
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
          The plugin will generate a color palette. Most of the colors on it
          have an <i>on-color</i> counterpart. <code>on-X</code> is the default
          color of content inside an element with background color{" "}
          <code>X</code>.
        </p>
        <div className="flex gap-8 mb-6">
          <div className="flex-1">
            <p>
              For example, an element with a <code>primary-container</code>{" "}
              background will have <code>on-primary-container</code> content.
            </p>
            <p>
              When you use the <code>.bg-primary-container</code> class, the
              default text color will be set to{" "}
              <code>on-primary-container</code>.
            </p>
          </div>
          <div className="relative flex flex-col items-center justify-center flex-1 w-1/2 px-2 py-1 bg-primary-container">
            <div>Default content (on-primary-container)</div>
            <div className="text-outline">
              Content with <span className="font-mono">.text-outline</span>{" "}
              class
            </div>
            <div className="absolute text-xs bottom-2 right-2">
              .bg-primary-container
            </div>
          </div>
        </div>
        <p>
          Default content color will not be set when using opacity modifiers
          (such as <code>bg-primary/50</code>). You can specify text color or
          use <code>bg-primary bg-opacity-50</code> instead.
        </p>
        <details className="px-4 py-2 mb-8 border rounded-lg border-outline/20 bg-tertiary-container bg-opacity-30">
          <summary className="text-lg font-medium cursor-pointer">
            Color palette
          </summary>
          <div className="flex flex-wrap my-2 whitespace-nowrap">
            <div className="w-1/4 px-2 py-1 bg-primary text-on-primary">
              primary
            </div>
            <div className="w-1/4 px-2 py-1 bg-on-primary text-primary">
              on-primary
            </div>
            <div className="w-1/4 px-2 py-1 bg-primary-container text-on-primary-container">
              primary-container
            </div>
            <div className="w-1/4 px-2 py-1 bg-on-primary-container text-primary-container">
              on-primary-container
            </div>
          </div>
          <div className="flex flex-wrap mb-2 whitespace-nowrap">
            <div className="w-1/4 px-2 py-1 bg-secondary text-on-secondary">
              secondary
            </div>
            <div className="w-1/4 px-2 py-1 bg-on-secondary text-secondary">
              on-secondary
            </div>
            <div className="w-1/4 px-2 py-1 bg-secondary-container text-on-secondary-container">
              secondary-container
            </div>
            <div className="w-1/4 px-2 py-1 bg-on-secondary-container text-secondary-container">
              on-secondary-container
            </div>
          </div>
          <div className="flex flex-wrap mb-2 whitespace-nowrap">
            <div className="w-1/4 px-2 py-1 bg-tertiary text-on-tertiary">
              tertiary
            </div>
            <div className="w-1/4 px-2 py-1 bg-on-tertiary text-tertiary">
              on-tertiary
            </div>
            <div className="w-1/4 px-2 py-1 bg-tertiary-container text-on-tertiary-container">
              tertiary-container
            </div>
            <div className="w-1/4 px-2 py-1 bg-on-tertiary-container text-tertiary-container">
              on-tertiary-container
            </div>
          </div>
          <div className="flex flex-wrap mb-2 whitespace-nowrap">
            <div className="w-1/4 px-2 py-1 bg-error text-on-error">error</div>
            <div className="w-1/4 px-2 py-1 bg-on-error text-error">
              on-error
            </div>
            <div className="w-1/4 px-2 py-1 bg-error-container text-on-error-container">
              error-container
            </div>
            <div className="w-1/4 px-2 py-1 bg-on-error-container text-error-container">
              on-error-container
            </div>
          </div>
          <div className="flex flex-wrap mb-2 whitespace-nowrap">
            <div className="w-1/4 px-2 py-1 bg-background text-on-background">
              background
            </div>
            <div className="w-1/4 px-2 py-1 bg-on-background text-background">
              on-background
            </div>
            <div className="w-1/4 px-2 py-1 bg-surface text-on-surface">
              surface
            </div>
            <div className="w-1/4 px-2 py-1 bg-on-surface text-surface">
              on-surface
            </div>
          </div>
          <div className="flex flex-wrap mb-2 whitespace-nowrap">
            <div className="w-1/4 px-2 py-1 bg-surface-variant text-on-surface-variant">
              surface-variant
            </div>
            <div className="w-1/4 px-2 py-1 bg-on-surface-variant text-surface-variant">
              on-surface-variant
            </div>
            <div className="w-1/4 px-2 py-1 bg-inverse-surface text-on-inverse-surface">
              inverse-surface
            </div>
            <div className="w-1/4 px-2 py-1 bg-on-inverse-surface text-inverse-surface">
              on-inverse-surface
            </div>
          </div>
          <div className="flex flex-wrap mb-2 whitespace-nowrap">
            <div className="w-1/4 px-2 py-1 bg-outline text-on-surface">
              outline
            </div>
            <div className="w-1/4 px-2 py-1 bg-inverse-primary text-on-surface">
              inverse-primary
            </div>
            <div className="w-1/4 px-2 py-1 text-white bg-black">black</div>
            <div className="w-1/4 px-2 py-1 text-black bg-white">white</div>
          </div>
          <div className="flex flex-wrap mb-2 whitespace-nowrap">
            <div className="w-1/4 px-2 py-1 transparent text-outline">
              transparent
            </div>
            <div className="w-1/4 px-2 py-1 current text-on-tertiary-container">
              current
            </div>
          </div>
        </details>
        <p>
          The generated colors can be used with any of Tailwind's usual
          utilities (such as <code>bg-</code>, <code>text-</code>,{" "}
          <code>border-</code>, <code>fill-</code>, <code>stroke-</code>, or{" "}
          <code>shadow-</code>).
        </p>
        <h3>
          <span className="text-secondary">2.</span> Automatic dark mode
        </h3>
        <p>
          All the generated colors will automatically switch to their dark mode
          shades based on your defined{" "}
          <a
            href="https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually"
            target="_blank"
            rel="noreferrer"
          >
            Dark Mode Strategy
          </a>
          , be it CSS <code>prefers-color-scheme</code> or a custom class.
          There's no need to use the <code>dark:</code> variant.
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
          <span className="text-secondary">3.</span> Interaction states
        </h3>
        <p>
          This plugin provides easy to use interaction states that follow the{" "}
          <a
            href="https://m3.material.io/foundations/interaction-states"
            target="_blank"
            rel="noreferrer"
          >
            M3 guidelines
          </a>{" "}
          on that topic. For every color with an <i>on-color</i> counterpart, an{" "}
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

          <div className="flex flex-wrap flex-1 my-2 gap-y-2">
            <div className="relative w-1/2 h-20 px-4 py-2 text-lg font-bold interactive-bg-primary">
              Primary
              <div className="absolute text-sm font-normal bottom-2 right-2">
                .interactive-bg-primary
              </div>
            </div>
            <div className="relative w-1/2 h-20 px-4 py-2 text-lg font-bold interactive-bg-primary-container">
              Primary Container
              <div className="absolute text-sm font-normal bottom-2 right-2">
                .interactive-bg-primary-container
              </div>
            </div>
            <div className="relative w-1/2 h-20 px-4 py-2 text-lg font-bold interactive-bg-secondary">
              Secondary
              <div className="absolute text-sm font-normal bottom-2 right-2">
                .interactive-bg-secondary
              </div>
            </div>
            <div className="relative w-1/2 h-20 px-4 py-2 text-lg font-bold interactive-bg-secondary-container">
              Secondary Container
              <div className="absolute text-sm font-normal bottom-2 right-2">
                .interactive-bg-secondary-container
              </div>
            </div>
            <div className="relative w-1/2 h-20 px-4 py-2 text-lg font-bold interactive-bg-tertiary">
              Tertiary
              <div className="absolute text-sm font-normal bottom-2 right-2">
                .interactive-bg-tertiary
              </div>
            </div>
            <div className="relative w-1/2 h-20 px-4 py-2 text-lg font-bold interactive-bg-tertiary-container">
              Tertiary Container
              <div className="absolute text-sm font-normal bottom-2 right-2">
                .interactive-bg-tertiary-container
              </div>
            </div>
            <div className="relative w-1/2 h-20 px-4 py-2 text-lg font-bold interactive-bg-error">
              Error
              <div className="absolute text-sm font-normal bottom-2 right-2">
                .interactive-bg-error
              </div>
            </div>
            <div className="relative w-1/2 h-20 px-4 py-2 text-lg font-bold interactive-bg-error-container">
              Error Container
              <div className="absolute text-sm font-normal bottom-2 right-2">
                .interactive-bg-error-container
              </div>
            </div>
            <div className="relative w-1/2 h-20 px-4 py-2 text-lg font-bold interactive-bg-background">
              Background
              <div className="absolute text-sm font-normal bottom-2 right-2">
                .interactive-bg-background
              </div>
            </div>
            <div className="relative w-1/2 h-20 px-4 py-2 text-lg font-bold interactive-bg-surface">
              Surface
              <div className="absolute text-sm font-normal bottom-2 right-2">
                .interactive-bg-surface
              </div>
            </div>
            <div className="relative w-1/2 h-20 px-4 py-2 text-lg font-bold interactive-bg-surface-variant">
              Surface Variant
              <div className="absolute text-sm font-normal bottom-2 right-2">
                .interactive-bg-surface-variant
              </div>
            </div>
            <div className="relative w-1/2 h-20 px-4 py-2 text-lg font-bold interactive-bg-inverse-surface">
              Inverse Surface
              <div className="absolute text-sm font-normal bottom-2 right-2">
                .interactive-bg-inverse-surface
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
          it, add <code>{"{ extend: true }"}</code> as a third argument to the{" "}
          <code>withMaterialColors</code> call.
        </p>
        <code className="block mb-6 shadow-inner bg-surface-variant text-secondary">
          {
            "module.exports = withMaterialColors(config, colors, { extend: true });"
          }
        </code>
        <h2>Dynamic Color</h2>
        <p>
          You can update the generated theme at runtime, directly on client-side
          JavaScript, with the <code>updateTheme</code> function.
        </p>
        <div className="inline-block px-2 py-1 mt-6 font-mono text-lg font-bold border-b rounded-t text-tertiary bg-surface-variant border-outline/20">
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
          <div className="pl-6">'media'</div>
          <div>{");"}</div>
        </code>

        <p>
          It's recommended to set all colors when changing <code>primary</code>{" "}
          because the <i>harmonize</i> feature (on by default) will affect the
          resulting shades.
        </p>

        <p className="p-2 border rounded border-outline/20 bg-secondary-container bg-opacity-30">
          <code>updateTheme</code> can't create new colors, only update existing
          ones.
        </p>

        <p className="p-2 border rounded border-outline/20 bg-secondary-container bg-opacity-30">
          ⚠️ The <code>updateTheme</code> function is around 75KB. If possible,
          load it asynchronously to reduce load times.
        </p>

        <details className="px-4 py-2 mb-8 border rounded-lg border-outline/20 bg-tertiary-container bg-opacity-30">
          <summary className="text-lg font-medium cursor-pointer">
            Try dynamic color
          </summary>
          <TryDynamicColor />
        </details>
      </main>
    </>
  );
}
