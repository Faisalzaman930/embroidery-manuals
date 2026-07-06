export type MachineType = "all" | "single-head" | "multi-head" | "cap" | "chenille" | "combination" | "tubular";

export interface TroubleshootingGuide {
  slug: string;
  title: string;
  symptom: string;
  intro: string;
  applies_to: MachineType[];
  causes: { title: string; description: string }[];
  fixes: { action: string; detail: string }[];
  faq: { q: string; a: string }[];
  related: string[];
}

export const GUIDES: TroubleshootingGuide[] = [
  {
    slug: "thread-breaking-embroidery-machine",
    title: "Thread Keeps Breaking — Embroidery Machine",
    symptom: "Thread breaking repeatedly during embroidery",
    intro:
      "Thread breaking is the most common problem on commercial embroidery machines and almost always has a simple cause. In most cases it comes down to one of four things: incorrect threading, wrong tension, a damaged needle, or a burr somewhere in the thread path. Work through the checklist below and you will find the cause within minutes.",
    applies_to: ["all"],
    causes: [
      {
        title: "Incorrect threading",
        description:
          "Missing one thread guide or threading in the wrong direction is enough to cause constant breaks. The thread must follow the exact path shown in your machine's manual — every guide, every tension disc, the take-up lever, and the needle eye.",
      },
      {
        title: "Upper tension too tight",
        description:
          "If the top tension is set too high the thread is pulled with more force than the needle can handle on dense stitch areas, causing it to snap. This is especially common on satin stitches at high SPM.",
      },
      {
        title: "Dull or damaged needle",
        description:
          "A needle with a blunt tip or a slight bend creates extra friction against the fabric. The thread heats up under that friction and breaks. Needles should be replaced every 8–10 hours of run time or after hitting a hoop.",
      },
      {
        title: "Wrong needle size for the thread",
        description:
          "Using a needle that is too small for the thread forces the thread through a gap it cannot fit cleanly. The standard rule is that the needle eye should be 40% wider than the thread diameter. For 40-weight polyester, a size 75/11 needle is the most common match.",
      },
      {
        title: "Burr on the needle plate, hook, or a thread guide",
        description:
          "A tiny nick or rough edge anywhere in the thread path will shred thread repeatedly at the same point in the stitch cycle. Run a cotton ball slowly along every thread guide, the needle plate hole, and the hook point — if it catches a fiber there is a burr.",
      },
      {
        title: "Thread quality or age",
        description:
          "Old or low-quality thread loses tensile strength and breaks under normal embroidery tension. Polyester thread stored in direct sunlight degrades significantly within months. If the thread breaks cleanly with almost no force when pulled by hand it needs to be replaced.",
      },
      {
        title: "Machine running too fast for the design",
        description:
          "Dense designs on thick or stretchy fabrics need a lower stitch speed. Running at maximum SPM on a jacket back or a heavy canvas tote puts more stress on the thread than it can sustain. Reduce speed by 20–30% and check if breaks stop.",
      },
    ],
    fixes: [
      {
        action: "Re-thread the machine completely from scratch",
        detail:
          "Do not just re-thread from the needle. Pull the thread all the way back to the cone and re-path it through every guide in the exact sequence shown in your manual. Many breaks are caused by a missed guide that is only noticeable when you start fresh.",
      },
      {
        action: "Replace the needle",
        detail:
          "Install a new needle of the correct size and system for your machine. Make sure the flat side of the shank faces toward the back (on most machines) and the needle is pushed all the way up into the clamp before tightening the screw.",
      },
      {
        action: "Check and adjust upper tension",
        detail:
          "Loosen the upper tension two full numbers and run a test swatch. The bobbin thread should be pulled just barely under the fabric surface on a satin column stitch — if it is, tension is correctly set. Increase one number at a time until you reach that point.",
      },
      {
        action: "Inspect the thread path for burrs",
        detail:
          "Run a cotton ball along every metal surface the thread touches — guides, needle plate hole, hook point. If it snags, the burr can be polished out with 2000-grit wet-dry sandpaper. If the hook tip is damaged, the hook assembly needs replacement.",
      },
      {
        action: "Reduce machine speed",
        detail:
          "Lower max SPM by 200–300 stitches and run the same design section. If breaks stop, the design density is exceeding what the thread can handle at full speed. Keep the speed reduction as a permanent setting for that material.",
      },
    ],
    faq: [
      {
        q: "Why does thread only break at the start of an embroidery run?",
        a: "Breaking at startup is almost always a threading issue — the thread slipped out of the take-up lever or a guide when the machine was re-threaded. Re-thread completely and check the take-up lever position before starting.",
      },
      {
        q: "Why does thread break on one head but not the others on a multi-head machine?",
        a: "When only one head breaks thread, the problem is specific to that head — check the needle, hook clearance, and thread path on that head. If all heads break, the cause is usually the thread itself, the cones, or a design speed issue.",
      },
      {
        q: "How often should I replace embroidery machine needles?",
        a: "As a rule, replace needles every 8 to 10 hours of embroidery time, or immediately after hitting a hoop or hard backing material. Running a worn needle is the most common cause of avoidable thread breaks.",
      },
    ],
    related: [
      "skipped-stitches-embroidery-machine",
      "bobbin-thread-showing-top-embroidery",
      "needle-breaks-embroidery-machine",
    ],
  },

  {
    slug: "needle-breaks-embroidery-machine",
    title: "Needle Breaking — Embroidery Machine",
    symptom: "Needle breaking during operation",
    intro:
      "A needle that breaks mid-run is a safety hazard and usually indicates a mechanical problem rather than a simple operator error. Needles are designed to flex slightly — they break when they are deflected beyond their limit, hit a solid object, or are the wrong size for the application. The fix is usually found in one of the causes below.",
    applies_to: ["all"],
    causes: [
      {
        title: "Needle too small for the fabric or thread",
        description:
          "A needle that is too fine flexes too much on thick materials and snaps. When embroidering on denim, canvas, leather, or multiple fabric layers, move up one or two needle sizes to give more column strength.",
      },
      {
        title: "Needle hitting the presser foot or needle plate",
        description:
          "If the needle is not centered in the needle hole or the presser foot is slightly misaligned, the needle will strike metal on every downstroke. Even a partial contact will break a needle within a few thousand stitches.",
      },
      {
        title: "Needle installed incorrectly",
        description:
          "A needle that is not fully seated in the clamp — even a millimeter too low — will hit the hook at the wrong point in the rotation and shear off. Always push the needle firmly up into the clamp before tightening.",
      },
      {
        title: "Fabric or backing shifting during operation",
        description:
          "If the hoop is loose or the fabric is not held firmly, the material can shift laterally under the needle and cause it to snap. The needle is designed to move vertically — any horizontal force from a shifting hoop is enough to break it.",
      },
      {
        title: "Hook timing is out of adjustment",
        description:
          "If the hook passes too close to the needle during its rotation, the needle is struck on every cycle. This is a mechanical adjustment that requires checking the hook-to-needle clearance against the spec in your machine's service manual.",
      },
    ],
    fixes: [
      {
        action: "Check needle installation",
        detail:
          "Remove the needle, clean the needle clamp, and reinstall with the flat side of the shank oriented correctly. Push firmly up until it stops, then tighten the clamp screw. Attempt to pull the needle down by hand to confirm it cannot move.",
      },
      {
        action: "Center the needle in the needle plate hole",
        detail:
          "Lower the needle slowly by hand and verify it passes through the exact center of the needle plate hole. If it touches the edge, the needle bar, presser foot, or needle plate requires alignment.",
      },
      {
        action: "Increase needle size",
        detail:
          "Move up one needle size (e.g. from 75/11 to 80/12) for heavier materials. For thick multiple-layer embroidery on denim or canvas, a 90/14 needle provides enough column strength to resist flex-breaking.",
      },
      {
        action: "Re-hoop fabric",
        detail:
          "Remove the hoop, re-hoop the fabric with firm tension, and check that the hoop locks securely on the machine. Even a small amount of play in the hoop attachment allows enough lateral movement to break needles.",
      },
      {
        action: "Check hook-to-needle clearance",
        detail:
          "Refer to the service manual for your machine model for the exact hook-to-needle gap specification. On most commercial machines this is 0.05–0.1mm. Adjusting hook timing requires following the machine's timing procedure exactly and is best done by a technician if you are unfamiliar with it.",
      },
    ],
    faq: [
      {
        q: "Is it dangerous when an embroidery machine needle breaks?",
        a: "Yes — needle fragments travel at high speed and can cause eye or skin injury. Always wear safety glasses when operating commercial embroidery machines and never stand directly in front of the needle area during operation.",
      },
      {
        q: "Why does the needle only break on thick areas of the design?",
        a: "Dense stitch areas create more lateral force on the needle as it pushes through many thread layers. This points to a needle that is too fine for the fabric or a speed that is too high for the design density — reduce speed or increase needle size.",
      },
    ],
    related: [
      "thread-breaking-embroidery-machine",
      "skipped-stitches-embroidery-machine",
      "poor-stitch-quality-embroidery-machine",
    ],
  },

  {
    slug: "skipped-stitches-embroidery-machine",
    title: "Skipped Stitches — Embroidery Machine",
    symptom: "Machine skipping stitches, leaving gaps in the design",
    intro:
      "Skipped stitches happen when the hook fails to catch the needle thread loop on its upstroke. The result is a visible gap in the embroidery. This is almost always caused by a timing issue between the needle and hook, a needle problem, or thread that is too heavy for the needle size. It is fully fixable — here is how to diagnose it.",
    applies_to: ["all"],
    causes: [
      {
        title: "Hook timing is off",
        description:
          "The hook must pass behind the needle at the exact moment the needle thread forms its loop on the upstroke. If the timing is even slightly off — early or late — the hook misses the loop and a stitch is skipped. Hook timing drifts over time and is the most common cause of persistent skipping.",
      },
      {
        title: "Hook-to-needle gap too large",
        description:
          "If the hook tip passes too far away from the needle, it cannot reliably catch the thread loop. The correct clearance is typically 0.05–0.1mm — closer on lighter threads, but never touching the needle.",
      },
      {
        title: "Wrong needle for the thread or fabric",
        description:
          "Ballpoint needles deflect on tightly woven fabrics. Sharp needles cut through knit fabrics too cleanly and reduce loop formation. Using the correct needle type for the material ensures a consistent thread loop for the hook to catch.",
      },
      {
        title: "Needle slightly bent",
        description:
          "A bent needle changes where the thread loop forms relative to the hook, causing the hook to miss it on some rotations. Hold the needle at eye level against a flat surface — any visible curve means it needs to be replaced.",
      },
      {
        title: "Thread too thick for needle eye",
        description:
          "Thick thread forced through a small needle eye cannot form a clean loop. The loop is distorted or too small for the hook to reliably catch it at full machine speed.",
      },
    ],
    fixes: [
      {
        action: "Replace the needle first",
        detail:
          "Before adjusting anything mechanical, install a fresh needle of the correct type and size. A disproportionate number of skipped-stitch calls are resolved by a new needle alone. Run a test after replacement before proceeding.",
      },
      {
        action: "Check thread/needle size match",
        detail:
          "For standard 40-weight embroidery thread, use a 75/11 needle. For 60-weight thread use a 70/10. For thicker thread or multiple needle passes, use 80/12 or 90/14. The needle eye should accommodate the thread without the thread being forced through.",
      },
      {
        action: "Verify hook timing",
        detail:
          "With the machine off, rotate the handwheel to bring the needle to its lowest point, then slowly continue rotating until the needle rises approximately 2mm above its lowest position. At this point the hook tip should be directly behind the needle, centered on the needle scarf. Refer to your machine's service manual for the exact specification.",
      },
      {
        action: "Adjust hook-to-needle clearance",
        detail:
          "Check the gap between the hook tip and the needle using a feeler gauge or by feel. The hook should just barely miss the needle — a gap of 0.05–0.1mm is typical. If the gap is too large, the hook needs to be moved closer to the needle following the adjustment procedure in the service manual.",
      },
    ],
    faq: [
      {
        q: "Why do skipped stitches appear only at the start of a design?",
        a: "Skipping only at startup often means the thread loop has not fully formed before the hook makes its first pass — this is a thread path issue. Make sure the thread is correctly through the take-up lever and there is adequate thread slack before the machine starts moving.",
      },
      {
        q: "Why does my machine skip on thin fabrics but not thick ones?",
        a: "Thin fabrics allow the needle to flex sideways more, shifting the loop position relative to the hook. A larger needle (which is stiffer) or slowing the machine speed usually resolves this.",
      },
    ],
    related: [
      "thread-breaking-embroidery-machine",
      "poor-stitch-quality-embroidery-machine",
      "needle-breaks-embroidery-machine",
    ],
  },

  {
    slug: "bobbin-thread-showing-top-embroidery",
    title: "Bobbin Thread Showing on Top of Embroidery",
    symptom: "Bobbin (lower) thread visible on the top surface of the embroidery",
    intro:
      "When the bobbin thread pulls to the top of the fabric and becomes visible in the finished embroidery, the tension system is out of balance. Either the upper thread tension is too loose, the bobbin tension is too tight, or both. This is one of the easiest embroidery problems to fix — and it does not require any tools.",
    applies_to: ["all"],
    causes: [
      {
        title: "Upper tension too loose",
        description:
          "When the upper thread has insufficient tension, the bobbin thread is pulled up through the fabric and shows on the top surface. On a correctly tensioned machine, the upper thread should be pulled just barely below the fabric surface on the underside, and the bobbin thread should be invisible from the top.",
      },
      {
        title: "Bobbin tension too tight",
        description:
          "Excessively tight bobbin tension pulls the upper thread down and then back up, causing the bobbin thread to surface on the top. The bobbin tension should allow the bobbin case to drop slowly under its own weight when the thread is held.",
      },
      {
        title: "Incorrect bobbin installation",
        description:
          "A bobbin that is inserted in the wrong orientation or with the thread going the wrong direction around the tension spring will have inconsistent tension that often pulls the bobbin thread to the top.",
      },
      {
        title: "Bobbin wound unevenly",
        description:
          "An unevenly wound bobbin has variable tension as it unwinds — smooth sections have correct tension but tightly wound sections pull hard and the bobbin thread surfaces.",
      },
    ],
    fixes: [
      {
        action: "Increase upper tension",
        detail:
          "Increase the upper thread tension by 1–2 units and run a short test swatch. Check both the top and bottom of the fabric. The goal is bobbin thread that is pulled just barely to the underside, invisible from the top. Increase tension in small increments until balanced.",
      },
      {
        action: "Check bobbin tension",
        detail:
          "Hold the bobbin case by the thread and let it hang freely. It should drop very slowly under its own weight — approximately 2–3cm per second. If it drops quickly with no resistance, the bobbin tension spring is too loose. If it does not drop at all, it is too tight. Adjust the small screw on the bobbin case spring — clockwise to tighten, counter-clockwise to loosen.",
      },
      {
        action: "Reinstall the bobbin",
        detail:
          "Remove the bobbin and bobbin case. Confirm the thread pulls from the bobbin in the correct direction (shown in your machine manual — usually counterclockwise when looking at the bobbin from the front). Thread through the tension spring notch and reinstall.",
      },
      {
        action: "Rewind the bobbin",
        detail:
          "If the bobbin thread is uneven or crossed, rewind a fresh bobbin. The thread should be wound smoothly and evenly from side to side with consistent tension throughout.",
      },
    ],
    faq: [
      {
        q: "How do I know if the problem is the upper tension or the bobbin tension?",
        a: "Look at the underside of your test swatch. If the upper thread shows in a straight line on the bottom (not pulled in a loop), the upper tension is too loose — increase it. If you see loops of upper thread on the bottom, the bobbin tension is too tight — loosen it.",
      },
      {
        q: "Does thread color affect how visible the bobbin thread is?",
        a: "Yes — using a light-colored bobbin thread under dark embroidery thread makes any surfacing immediately visible. Always use bobbin thread that matches or is darker than the embroidery thread color to minimize visibility of minor tension variations.",
      },
    ],
    related: [
      "thread-breaking-embroidery-machine",
      "thread-bunching-bird-nesting-embroidery",
      "poor-stitch-quality-embroidery-machine",
    ],
  },

  {
    slug: "thread-bunching-bird-nesting-embroidery",
    title: "Thread Bunching Under Fabric (Bird Nesting) — Embroidery Machine",
    symptom: "Thread bunching or nesting on the underside of the fabric at the start of a design",
    intro:
      "Bird nesting — a tangled mass of thread under the fabric, usually at the start of the first stitch — is almost always a threading problem. Specifically, the upper thread is not being held with enough tension when the machine takes its first stitch. The thread pulls freely, wraps around the bobbin area, and tangles. The fix is almost always found in the threading path.",
    applies_to: ["all"],
    causes: [
      {
        title: "Thread not through the take-up lever",
        description:
          "The take-up lever controls how much thread is released on the downstroke and taken back up on the upstroke. If the thread bypasses the take-up lever, there is no control over thread feed at the start of the stitch and thread bunches immediately.",
      },
      {
        title: "Thread not caught in tension discs",
        description:
          "The upper tension discs must grip the thread. If the thread is run alongside the discs instead of between them — a common mistake — there is zero upper tension and thread feeds freely into the nesting tangle.",
      },
      {
        title: "Presser foot not lowered at start",
        description:
          "The tension discs only engage when the presser foot is lowered. Starting the machine with the foot up means the discs are open, there is no tension, and the first few stitches will always nest.",
      },
      {
        title: "Fabric not hooped tightly",
        description:
          "Loose fabric moves with the needle downstroke instead of staying in place. This creates extra slack in the thread path that accumulates under the fabric as a nest. Re-hoop with firm, even tension.",
      },
    ],
    fixes: [
      {
        action: "Re-thread the upper thread path completely",
        detail:
          "Start from the thread cone and follow every step in your machine manual — each guide, the tension discs, the take-up lever, and the needle eye. Do not skip any step. Bird nesting almost always stops when the threading path is correct.",
      },
      {
        action: "Confirm presser foot is lowered before starting",
        detail:
          "Lower the presser foot before running the machine. On machines with an automatic foot lifter, confirm the foot is fully down before the first stitch. This closes the tension discs and gives the thread the grip it needs.",
      },
      {
        action: "Hold thread tails at start",
        detail:
          "When starting a new thread or beginning a design, hold the tail of the upper thread (and bobbin thread) gently but firmly for the first 3–5 stitches. This prevents the free end from being pulled down and tangling.",
      },
      {
        action: "Increase upper tension slightly",
        detail:
          "If re-threading does not solve the problem, increase the upper tension by one unit. More tension at the start reduces how much thread feeds freely into the first stitch.",
      },
    ],
    faq: [
      {
        q: "Bird nesting happens at the start of every design — why?",
        a: "Consistent nesting at the start of every design is almost always a threading issue — specifically the thread not being in the take-up lever or tension discs. Check those two elements first. Re-threading completely from the cone resolves the majority of these cases.",
      },
      {
        q: "Can bird nesting damage the machine?",
        a: "In severe cases, a large nest can jam the hook assembly and bend the hook or break the needle. Stop the machine immediately when you see nesting, clear the tangle, re-thread, and check the hook area for any thread wrapped around the shaft before restarting.",
      },
    ],
    related: [
      "thread-breaking-embroidery-machine",
      "bobbin-thread-showing-top-embroidery",
      "poor-stitch-quality-embroidery-machine",
    ],
  },

  {
    slug: "poor-stitch-quality-embroidery-machine",
    title: "Poor Stitch Quality — Loose, Uneven, or Puckered Embroidery",
    symptom: "Embroidery stitches look loose, uneven, or the fabric is puckering",
    intro:
      "Poor stitch quality is usually a combination of tension, backing, and speed — rarely a single cause. Puckering means the fabric is being pulled; loose stitches mean the thread is not being held consistently. Both are fixable with systematic adjustments to tension, stabilizer, and machine settings.",
    applies_to: ["all"],
    causes: [
      {
        title: "Incorrect stabilizer (backing) for the fabric",
        description:
          "Using too little backing or the wrong type for the fabric type is the most common cause of puckering and poor coverage. Stretchy fabrics need a cut-away backing to prevent movement during stitching. Knits embroidered with only a tear-away will always pucker.",
      },
      {
        title: "Tension imbalance between upper and bobbin",
        description:
          "When the tension is unbalanced, stitches form too close to the top or bottom surface of the fabric, reducing column width, causing pull, and creating visible gaps in the fill.",
      },
      {
        title: "Machine speed too high for design density",
        description:
          "Running a dense design at maximum SPM gives the thread less time to settle into position before the next stitch pulls it. Reducing speed by 15–25% often dramatically improves stitch coverage quality.",
      },
      {
        title: "Worn or damaged hook",
        description:
          "A hook that has been running for tens of millions of stitches develops a polished groove or slight nick that changes how the loop is formed. This creates loop size variation stitch to stitch, resulting in uneven stitch length.",
      },
      {
        title: "Design not digitized for the fabric",
        description:
          "Embroidery designs require different stitch types, densities, and underlay settings for different fabrics. A design digitized for a stable woven fabric will pucker on a stretchy polo shirt without adjustment.",
      },
    ],
    fixes: [
      {
        action: "Upgrade to the correct stabilizer",
        detail:
          "Use cut-away backing for stretchy and knit fabrics. Use tear-away for stable woven fabrics. Add a topping (water-soluble stabilizer) over textured fabrics like fleece and terry cloth to prevent stitches from sinking. Use two layers of backing for highly detailed designs.",
      },
      {
        action: "Balance tension",
        detail:
          "Run a test swatch on the same fabric and check both sides. The upper and bobbin threads should meet just inside the fabric — neither thread should be visible on the opposite side. Adjust upper tension first (it is the easier adjustment), then bobbin if needed.",
      },
      {
        action: "Reduce machine speed",
        detail:
          "Lower the max SPM by 200–300 stitches and run the same design section. Look at the stitch definition — coverage and sharpness of edges both improve at lower speeds on most fabrics.",
      },
      {
        action: "Hoop the fabric correctly",
        detail:
          "The fabric and backing must be hooped together with even tension — no slack, no bunching, and no stretching beyond the fabric's natural state. Use the correct hoop size for the design (a hoop that is too large for the design allows the unsupported fabric to move).",
      },
    ],
    faq: [
      {
        q: "Why does my embroidery look good on samples but bad in production?",
        a: "Production runs often involve faster speed settings, bulk hooping, or different fabric lots. Check that speed was not increased from the sample run, the hooping tension is consistent, and the backing type and weight match what was used in sampling.",
      },
      {
        q: "What is underlay and why does it affect stitch quality?",
        a: "Underlay is a foundation layer of stitches run before the main fill or satin stitches. It stabilizes the fabric, provides a base for the top stitches to lock into, and prevents the main stitches from sinking into the fabric pile. Insufficient underlay is a common cause of poor coverage on fleece, polo shirts, and terry cloth.",
      },
    ],
    related: [
      "thread-breaking-embroidery-machine",
      "bobbin-thread-showing-top-embroidery",
      "embroidery-machine-not-homing-error",
    ],
  },

  {
    slug: "embroidery-head-misregistration",
    title: "Head Misregistration — Multi-Head Embroidery Machine",
    symptom: "Designs not aligning correctly between heads on a multi-head machine",
    intro:
      "Misregistration on a multi-head machine — where one or more heads embroider the design in a slightly different position than the others — is a mechanical problem, not a software one. The design file is the same for all heads; the issue is that one head is physically not following the pantograph movement accurately. Here is how to find and fix it.",
    applies_to: ["multi-head"],
    causes: [
      {
        title: "Loose or worn pantograph connection on one head",
        description:
          "Each head is connected to the main pantograph drive by a linkage. If that linkage is loose — a worn pin, a loose bolt, or a cracked connector — the head lags behind the pantograph movement or overshoots it, creating misregistration.",
      },
      {
        title: "Worn drive belt",
        description:
          "The X or Y axis drive belt stretches over time. A belt that has lost tension allows the pantograph to slip slightly in one direction, causing consistent offset in the same direction across all designs.",
      },
      {
        title: "Machine speed too high",
        description:
          "At very high SPM, the pantograph direction changes faster than some head linkages can follow without slop in their connections becoming visible. Reducing speed often reduces the appearance of misregistration while you identify the mechanical cause.",
      },
      {
        title: "Hoop not seated identically on all heads",
        description:
          "On multi-head machines with individual hoop arms, a hoop that is not seated the same way on each arm will produce misregistration even if the machine is mechanically perfect. Use the same hoop loading technique for every head.",
      },
      {
        title: "One head needs realignment",
        description:
          "Over time — particularly after a crash where the hoop hits an obstacle — a head can be knocked slightly out of alignment. Realignment requires using the machine's alignment procedure from the service manual.",
      },
    ],
    fixes: [
      {
        action: "Run a registration test",
        detail:
          "Embroider a simple registration mark (a small cross or circle) on fabric in all hoops at the same time. Measure the position of the mark from each head against the first head. This tells you exactly which heads are misregistered and by how much.",
      },
      {
        action: "Inspect pantograph linkages on misregistered heads",
        detail:
          "With the machine off, try to move each head independently relative to the pantograph. There should be zero play. If you can wiggle a head without moving the pantograph, find the loose connection in that head's linkage — it is usually a worn pin or loose locking bolt.",
      },
      {
        action: "Check drive belt tension",
        detail:
          "Refer to your machine's service manual for the correct belt tension specification for both X and Y axes. A belt that is too slack will deflect more than 10–15mm when pressed with moderate finger pressure at its midpoint. Replace or retension as specified.",
      },
      {
        action: "Reduce machine speed",
        detail:
          "Lower max SPM by 200 stitches and run the registration test again. If misregistration reduces, the linkages have enough slop to cause position error at higher speeds — inspect and tighten all linkage connections before running at full speed.",
      },
    ],
    faq: [
      {
        q: "Is head misregistration covered under service warranty?",
        a: "Most commercial embroidery machine warranties cover mechanical misregistration caused by manufacturing defects. Misregistration caused by a crash, impact, or worn consumable parts (belts, pins) is typically not covered. Contact your authorized dealer for a service evaluation.",
      },
      {
        q: "How much misregistration is acceptable on a commercial multi-head machine?",
        a: "For commercial embroidery applications, head-to-head registration should be within 0.5mm. Registration within 0.3mm is typical for well-maintained machines. Registration error above 1mm is noticeable in finished embroidery on most designs and indicates a mechanical problem that needs attention.",
      },
    ],
    related: [
      "poor-stitch-quality-embroidery-machine",
      "embroidery-machine-not-homing-error",
      "thread-breaking-embroidery-machine",
    ],
  },

  {
    slug: "color-change-failure-embroidery-machine",
    title: "Color Change Not Working — Embroidery Machine",
    symptom: "Machine not changing color correctly, skipping color changes, or color change is slow",
    intro:
      "Automatic color change is one of the most-used mechanisms on a commercial embroidery machine and one of the most common sources of production stoppages. Color-change failures fall into two categories: the machine does not change at all, or it changes to the wrong needle position. Both are diagnosable from the machine's error log and a physical inspection of the color-change components.",
    applies_to: ["single-head", "multi-head", "combination"],
    causes: [
      {
        title: "Thread detection sensor is dirty or blocked",
        description:
          "Most commercial embroidery machines detect the end of each thread color with an optical or mechanical sensor. Thread lint, dust, or a stray thread fiber blocking the sensor causes it to report false breaks or fail to trigger the color change sequence.",
      },
      {
        title: "Needle position solenoid fault",
        description:
          "The solenoid that selects the correct needle position is an electro-mechanical component subject to wear. A solenoid that is sticking, burning out, or receiving insufficient voltage will fail to position the correct needle on color change.",
      },
      {
        title: "Color-change motor encoder fault",
        description:
          "The encoder tells the controller exactly where the needle bar carrier is positioned. If the encoder is dirty or failing, the controller cannot confirm the correct needle is in position and will either stop and display an error or change to the wrong position.",
      },
      {
        title: "Color sequence programmed incorrectly in the design file",
        description:
          "The machine follows the color sequence encoded in the design file. If the design was digitized with color changes in the wrong order or at the wrong stitch counts, the machine will follow those instructions and appear to malfunction — even though it is working correctly.",
      },
      {
        title: "Thread tension causing false break detection",
        description:
          "Thread-break sensors that are set too sensitive or are out of calibration will trigger false breaks during color changes, stopping the machine and requiring manual restart for each color.",
      },
    ],
    fixes: [
      {
        action: "Clean all thread sensors and color-change components",
        detail:
          "Using a soft brush and compressed air, clean around all thread detection sensors, the needle bar carrier track, and the color-change motor. Run the machine through a color change cycle manually from the control panel and observe if it completes successfully after cleaning.",
      },
      {
        action: "Test solenoids individually",
        detail:
          "Most commercial embroidery machine control panels include a diagnostic mode where each solenoid can be activated individually. Run through all solenoids — any that fail to fire, fire weakly, or fire with a buzzing sound rather than a clean click need replacement.",
      },
      {
        action: "Check the design file color sequence",
        detail:
          "Open the design in your embroidery software and manually review the color change sequence. Verify the number of color changes, the stitch counts between changes, and that no duplicate color changes exist. Re-save and transfer the corrected file.",
      },
      {
        action: "Recalibrate the color-change encoder",
        detail:
          "Most commercial embroidery machine software includes a color-change calibration or alignment function. Run this procedure with the machine empty (no hoops or fabric) and follow the on-screen prompts. This resets the encoder reference point and resolves most incorrect-position color change errors.",
      },
    ],
    faq: [
      {
        q: "Why does color change work correctly in slow mode but fail at production speed?",
        a: "Color change failures that only appear at high speed usually indicate a solenoid or motor that is working but too slow — it cannot complete the color change sequence within the time available at full SPM. Test at progressively higher speeds and replace the slow component.",
      },
    ],
    related: [
      "embroidery-machine-not-homing-error",
      "thread-breaking-embroidery-machine",
      "embroidery-head-misregistration",
    ],
  },

  {
    slug: "cap-embroidery-alignment-problems",
    title: "Cap Embroidery Alignment Problems",
    symptom: "Embroidery not centered or positioned correctly on caps",
    intro:
      "Cap alignment problems are the most common complaint in shops that do significant cap embroidery. Unlike flat embroidery where hooping errors are immediately obvious, cap errors often go unnoticed until the cap comes off the machine. The cause is almost always in the loading process — not the machine or the design.",
    applies_to: ["cap"],
    causes: [
      {
        title: "Cap not fully seated in the cap frame driver",
        description:
          "If the cap's sweatband is not fully seated all the way back in the driver, the bill will sit at a different angle than expected. Even 2–3mm of variation in how far back the sweatband sits changes the vertical position of the design on the front panel.",
      },
      {
        title: "Cap frame not zeroed correctly",
        description:
          "The cap frame driver must be zeroed to a reference position before each run. If the machine's cap frame zero position has drifted — usually after the machine was moved, had a crash, or the cap frame was removed and reinstalled — all caps in the run will be consistently off in the same direction.",
      },
      {
        title: "Design origin is not set to center of cap panel",
        description:
          "The design's origin point in the embroidery software must match the machine's cap frame center reference. If the design origin is set to center but the machine is referencing a different point, every cap will be off by the same amount.",
      },
      {
        title: "Inconsistent cap loading technique",
        description:
          "When multiple operators load caps, inconsistent technique produces inconsistent results. One operator seating the sweatband 5mm further back than another creates a vertical difference that looks like a machine error but is a process error.",
      },
      {
        title: "Cap frame not compatible with cap construction",
        description:
          "Structured caps with tall, stiff fronts require a different driver size than unstructured low-profile caps. Using the wrong cap frame for the cap construction results in the bill angle being incorrect for the driver's reference position.",
      },
    ],
    fixes: [
      {
        action: "Re-zero the cap frame reference position",
        detail:
          "Remove the cap from the frame, navigate to the cap frame zero function in the machine control panel, and run the re-zero procedure. This sets the physical reference point the machine uses to position all cap designs. Refer to your machine's manual for the specific re-zero procedure.",
      },
      {
        action: "Standardize the cap loading process",
        detail:
          "Create a visual loading guide: a photo or diagram showing exactly how far the sweatband extends into the driver, what the bill angle looks like from the front, and how to apply even pressure when snapping the frame closed. Post it at every machine used for cap embroidery.",
      },
      {
        action: "Embroider a test cap before each production run",
        detail:
          "Always run one test cap at the start of a new cap embroidery production run and measure the design position before loading the full batch. This catches any alignment drift before it affects the entire order.",
      },
      {
        action: "Check design origin in embroidery software",
        detail:
          "Open the design in your embroidery software and confirm the origin point is set to the center of the design. Also confirm that the center horizontal is aligned with the design's visual center — many older digitized designs have origins that are slightly off-center.",
      },
    ],
    faq: [
      {
        q: "Why do caps embroider correctly on one run and then start coming out off-center?",
        a: "Consistent drift between runs usually means the cap frame was removed and reinstalled (common when switching between flat embroidery and cap embroidery) and the re-zero procedure was not run after reinstalling it. Always re-zero the cap frame after it has been removed.",
      },
      {
        q: "How do I measure if a cap design is centered correctly?",
        a: "Measure from the center seam of the cap's front panel to the left and right edges of the embroidered design — these measurements should be equal. Measure the vertical position from the bottom edge of the sweatband to the lowest stitch of the design and compare it to your spec sheet.",
      },
    ],
    related: [
      "poor-stitch-quality-embroidery-machine",
      "embroidery-machine-not-homing-error",
      "thread-breaking-embroidery-machine",
    ],
  },

  {
    slug: "embroidery-machine-not-homing-error",
    title: "Machine Not Homing / Homing Error — Embroidery Machine",
    symptom: "Machine displays a homing error or will not complete the startup homing sequence",
    intro:
      "A homing error at startup means the machine cannot find one or more of its reference position sensors. This is almost always a sensor, encoder, or communication fault — not a software problem. The machine needs to know exactly where the pantograph, needle bar, and color-change carrier are before it can safely operate, and the homing sequence is how it finds those reference positions.",
    applies_to: ["all"],
    causes: [
      {
        title: "Limit switch blocked or faulty",
        description:
          "Each axis (X, Y, and sometimes Z) has a limit switch at its home position. The machine moves each axis until it hits this switch to set its reference. If a switch is blocked by debris, has failed electrically, or is physically misaligned, the homing sequence will time out and throw an error.",
      },
      {
        title: "Emergency stop engaged",
        description:
          "Most commercial embroidery machines have a physical emergency stop button that must be released before homing is possible. A partially depressed or stuck e-stop will prevent homing from completing.",
      },
      {
        title: "Encoder fault on one axis",
        description:
          "The encoder tells the controller how far each axis has moved. If the encoder signal is missing or corrupted — due to a loose cable, a dirty encoder disk, or a failing encoder — the controller cannot confirm axis position and will halt homing with an error.",
      },
      {
        title: "Obstruction in the pantograph travel path",
        description:
          "An object in the pantograph travel range — a hoop left in the machine, a fallen tool, or a piece of backing — will stop the axis movement before it reaches the home sensor. The machine times out waiting to reach the sensor.",
      },
      {
        title: "Servo drive fault",
        description:
          "Each axis motor has a servo drive controller. A drive fault — due to overheating, a power event, or internal failure — prevents that axis from moving during homing. Servo faults are usually displayed as a separate error code alongside the homing error.",
      },
    ],
    fixes: [
      {
        action: "Release and re-engage the emergency stop",
        detail:
          "Locate the e-stop button (usually a large red mushroom button on the machine frame). Rotate it clockwise to release it fully. On some machines the e-stop must be turned and then pulled up. After releasing, cycle machine power and attempt homing again.",
      },
      {
        action: "Clear the machine work area",
        detail:
          "Remove all hoops, tools, fabric, and backing from inside the machine. Confirm the pantograph can move freely in all directions by slowly moving it by hand (with the machine off). Restart and attempt homing.",
      },
      {
        action: "Inspect limit switches",
        detail:
          "With the machine off, locate the limit switch for the axis showing the homing error (indicated in the error code). Clean around the switch with compressed air. Check that the switch actuator is not bent or broken. If the switch is accessible, test continuity across its terminals with a multimeter.",
      },
      {
        action: "Power cycle the machine completely",
        detail:
          "Turn the machine off at the main power switch, wait 30 seconds for all capacitors to discharge, then power back on. Servo drive faults are often cleared by a full power cycle. Attempt homing immediately after power-on.",
      },
      {
        action: "Check encoder cables",
        detail:
          "With the machine off, inspect the encoder cables for the axis showing the fault. Look for any cable that is pinched, has a visible break in the jacket, or has a loose connector at either end. Re-seat all encoder connectors firmly. If a cable is damaged, replacement is required before the machine can home correctly.",
      },
    ],
    faq: [
      {
        q: "Is it safe to try to manually move the pantograph when the machine shows a homing error?",
        a: "Yes — with the machine powered off, the pantograph can be moved by hand to clear any obstruction or to manually position it away from the limits. Do not force it if you feel strong resistance, as this indicates the obstruction is mechanical rather than positional.",
      },
      {
        q: "The machine homes correctly sometimes but fails randomly — what causes this?",
        a: "Intermittent homing failures are usually caused by a marginal limit switch (working but with poor contact), a loose encoder cable connector, or a servo drive that is overheating and faulting after warmup. Check all connectors first, then inspect the limit switches for signs of wear.",
      },
    ],
    related: [
      "embroidery-head-misregistration",
      "color-change-failure-embroidery-machine",
      "poor-stitch-quality-embroidery-machine",
    ],
  },
];

export function getGuideBySlug(slug: string): TroubleshootingGuide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

export function getGuidesForCategory(category: string): TroubleshootingGuide[] {
  return GUIDES.filter(
    (g) => g.applies_to.includes("all") || g.applies_to.includes(category as MachineType)
  );
}
