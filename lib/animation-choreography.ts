/**
 * ============================================================================
 * LAKSH ENCLAVE — GSAP & WEBGL / R3F ANIMATION CHOREOGRAPHY (`animation-choreography.ts`)
 * ============================================================================
 * 
 * Award-Winning Motion Architecture:
 * - 0.0s to 1.8s Hero Cinematic Entrance Timeline
 * - Scrubbed 300vh Pinning & 2.5D Community Flyover Waypoints
 * - WebGL Shader Dissolve & Camera Orbit Physics
 * - Section Transition Orchestrator with Chromatic Theme Interpolation
 * 
 * @author Lead Creative Technologist & WebGL / R3F Animation Engineer
 * @version 1.0.0 Production-Ready
 */

export interface CameraWaypoint {
  progress: number; // 0.0 to 1.0
  position: [number, number, number]; // [x, y, z] in Three.js units
  target: [number, number, number]; // Look-at point [x, y, z]
  fov: number;
  atmosphereDensity: number;
  label: string;
}

export interface HeroEntranceCallbacks {
  onPreloaderRetract?: () => void;
  onHeadlineReveal?: () => void;
  onCtaDock?: () => void;
  onSequenceComplete?: () => void;
}

export class AnimationChoreographer {
  /**
   * 3D Camera Path for the 2.5D Community Flyover.
   * Three distinct high-impact cinematic waypoints.
   */
  public static readonly FLYOVER_WAYPOINTS: CameraWaypoint[] = [
    {
      progress: 0.0,
      position: [0, 450, 600],
      target: [0, 0, 0],
      fov: 45,
      atmosphereDensity: 0.002,
      label: "Waypoint 1: North Bengaluru Aerial & Nandi Hills Horizon"
    },
    {
      progress: 0.45,
      position: [-180, 120, 240],
      target: [-40, 30, 0],
      fov: 38,
      atmosphereDensity: 0.0012,
      label: "Waypoint 2: Low-Altitude Boulevard Banking & The Retreat Clubhouse"
    },
    {
      progress: 1.0,
      position: [0, 80, 160],
      target: [0, 10, 0],
      fov: 32,
      atmosphereDensity: 0.0005,
      label: "Waypoint 3: Centering on Celestial Gazebo & Seamless Masterplan Handover"
    }
  ];

  /**
   * Interpolates 3D camera position, target, and FOV between waypoints
   * based on scrubbed scroll progress (0.0 to 1.0).
   */
  public static interpolateCameraAtProgress(progress: number): {
    position: [number, number, number];
    target: [number, number, number];
    fov: number;
    atmosphereDensity: number;
  } {
    const clampedProgress = Math.max(0, Math.min(1, progress));
    const waypoints = this.FLYOVER_WAYPOINTS;

    // Find bounding waypoints
    let startIndex = 0;
    for (let i = 0; i < waypoints.length - 1; i++) {
      if (clampedProgress >= waypoints[i].progress && clampedProgress <= waypoints[i + 1].progress) {
        startIndex = i;
        break;
      }
    }

    const start = waypoints[startIndex];
    const end = waypoints[startIndex + 1] || start;

    const segmentSpan = (end.progress - start.progress) || 1;
    const localT = (clampedProgress - start.progress) / segmentSpan;

    // Smooth cubic Hermite interpolation
    const smoothT = localT * localT * (3 - 2 * localT);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    return {
      position: [
        lerp(start.position[0], end.position[0], smoothT),
        lerp(start.position[1], end.position[1], smoothT),
        lerp(start.position[2], end.position[2], smoothT)
      ],
      target: [
        lerp(start.target[0], end.target[0], smoothT),
        lerp(start.target[1], end.target[1], smoothT),
        lerp(start.target[2], end.target[2], smoothT)
      ],
      fov: lerp(start.fov, end.fov, smoothT),
      atmosphereDensity: lerp(start.atmosphereDensity, end.atmosphereDensity, smoothT)
    };
  }

  // ==========================================================================
  // HERO ENTRANCE CHOREOGRAPHY SPECIFICATION
  // ==========================================================================

  /**
   * Evaluates if user prefers reduced motion (WCAG 2.2 AA Compliance).
   */
  public static prefersReducedMotion(): boolean {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  /**
   * Generates GSAP timeline configuration for the 0.0s - 1.8s Hero Entrance.
   * Compatible with `@gsap/react` and `gsap.timeline()`.
   * Automatically provides instantaneous WCAG 2.2 AA fallbacks for reduced-motion.
   */
  public static createHeroTimelineConfig(
    elements: {
      preloaderCurtain?: HTMLElement | null;
      brandMonogram?: HTMLElement | null;
      headlineWords?: HTMLElement[] | null;
      subheading?: HTMLElement | null;
      ctaContainer?: HTMLElement | null;
      hudIndicators?: HTMLElement | null;
      canvasOverlay?: HTMLElement | null;
    },
    callbacks?: HeroEntranceCallbacks
  ): {
    timelineDurationSecs: number;
    keyframes: Array<{ time: number; description: string; target: string; animation: Record<string, unknown> }>;
  } {
    const isReduced = this.prefersReducedMotion();
    if (isReduced) {
      return {
        timelineDurationSecs: 0.01,
        keyframes: [
          {
            time: 0.0,
            description: "Accessibility Fallback: Instantaneous reveal of hero composition",
            target: "canvasOverlay",
            animation: {
              opacity: 1,
              duration: 0.01,
              onComplete: () => {
                callbacks?.onHeadlineReveal?.();
                callbacks?.onCtaDock?.();
                callbacks?.onSequenceComplete?.();
              }
            }
          }
        ]
      };
    }
    return {
      timelineDurationSecs: 1.8,
      keyframes: [
        {
          time: 0.0,
          description: "Curtain Retraction: Dual vertical panels split with power4.inOut easing",
          target: "preloaderCurtain",
          animation: {
            scaleY: 0,
            transformOrigin: "top center",
            duration: 0.85,
            ease: "power4.inOut",
            onStart: callbacks?.onPreloaderRetract
          }
        },
        {
          time: 0.25,
          description: "Brand Monogram & Radial Glow illumination",
          target: "brandMonogram",
          animation: {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.6,
            ease: "expo.out"
          }
        },
        {
          time: 0.40,
          description: "Hero Headline Word Mask: Clip-path reveal with 3D perspective rotation",
          target: "headlineWords",
          animation: {
            y: 0,
            opacity: 1,
            rotateX: 0,
            stagger: 0.04,
            duration: 0.9,
            ease: "power3.out",
            onStart: callbacks?.onHeadlineReveal
          }
        },
        {
          time: 0.75,
          description: "Subheading & RERA Certification Pill fade-up",
          target: "subheading",
          animation: {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out"
          }
        },
        {
          time: 0.95,
          description: "VIP Action Deck & Schedule Site Visit CTA dock into view",
          target: "ctaContainer",
          animation: {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.4)",
            onStart: callbacks?.onCtaDock
          }
        },
        {
          time: 1.30,
          description: "HUD Real-Time Stats & Coordinates ticker fade-in",
          target: "hudIndicators",
          animation: {
            opacity: 1,
            duration: 0.5,
            ease: "power1.in"
          }
        },
        {
          time: 1.80,
          description: "Hero Entrance Complete: Lenis scroll & ScrollTrigger unlocked",
          target: "canvasOverlay",
          animation: {
            pointerEvents: "auto",
            duration: 0.01,
            onComplete: callbacks?.onSequenceComplete
          }
        }
      ]
    };
  }

  // ==========================================================================
  // SECTION TRANSITION CHROMATIC MAPPINGS
  // ==========================================================================

  /**
   * Interpolates background and typography themes across sections to create
   * the seamless "film-like" flow specified in the master brief.
   */
  public static getSectionTheme(sectionId: string): {
    bg: string;
    text: string;
    accent: string;
    border: string;
  } {
    switch (sectionId) {
      case "hero":
      case "community-overview":
        return {
          bg: "#111815", // Obsidian Charcoal
          text: "#F5F2EA", // Alabaster Warm White
          accent: "#B99A67", // Champagne Gold
          border: "rgba(185, 154, 103, 0.2)"
        };
      case "architectural-story":
      case "amenities":
        return {
          bg: "#17382E", // Deep Forest Emerald
          text: "#F5F2EA",
          accent: "#B99A67",
          border: "rgba(140, 155, 135, 0.25)"
        };
      case "masterplan":
      case "villa-explorer":
      case "floorplans":
      default:
        return {
          bg: "#F5F2EA", // Alabaster Warm White
          text: "#111815", // Obsidian Charcoal
          accent: "#17382E", // Deep Forest Emerald
          border: "rgba(17, 24, 21, 0.12)"
        };
    }
  }
}
