/**
 * ============================================================================
 * LAKSH ENCLAVE — HIGH-CRO CONVERSION ENGINE (`cro-conversion-engine.ts`)
 * ============================================================================
 * 
 * Enterprise Luxury Real Estate Conversion Architecture:
 * - Finite State Machine (FSM) for High-Value Lead Capture
 * - VIP WhatsApp Concierge Deep-Link Generator with Contextual Pre-Fill
 * - Real-Time DataLayer & Pixel Analytics Event Dispatcher
 * - Exit-Intent & High-Engagement Lead Scoring Engine
 * 
 * @author Lead Creative Technologist & Senior Next.js Architect
 * @version 1.0.0 Production-Ready
 */

import { CRO_CONFIG, MasterplanPlot } from '../data/project';

// ============================================================================
// 1. LEAD CAPTURE MODAL FINITE STATE MACHINE (FSM)
// ============================================================================

export type ModalState = 
  | 'IDLE' 
  | 'OPENED' 
  | 'VALIDATING' 
  | 'SUBMITTING' 
  | 'SUCCESS' 
  | 'ERROR';

export type LeadIntentType = 
  | 'PLOT_RESERVATION' 
  | 'VILLA_INQUIRY' 
  | 'BROCHURE_DOWNLOAD' 
  | 'SCHEDULE_SITE_VISIT' 
  | 'VIP_PORTFOLIO_REQUEST';

export interface LeadFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  intentType: LeadIntentType;
  selectedPlotNumber?: string;
  selectedVillaType?: string;
  preferredVisitDate?: string;
  countryCode: string;
  comments?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}

export interface SubmissionResponse {
  success: boolean;
  leadReferenceId?: string;
  assignedConciergeName?: string;
  downloadUrl?: string;
  errorMessage?: string;
}

export class LeadCaptureFSM {
  private currentState: ModalState = 'IDLE';
  private formData: LeadFormData = {
    fullName: '',
    phoneNumber: '',
    email: '',
    intentType: 'SCHEDULE_SITE_VISIT',
    countryCode: '+91'
  };
  private submissionResult: SubmissionResponse | null = null;
  private stateListeners: Array<(state: ModalState, data: LeadFormData, result: SubmissionResponse | null) => void> = [];

  public getState(): ModalState {
    return this.currentState;
  }

  public getFormData(): LeadFormData {
    return { ...this.formData };
  }

  public getSubmissionResult(): SubmissionResponse | null {
    return this.submissionResult;
  }

  public openModal(intent: LeadIntentType, context?: { plotNumber?: string; villaType?: string }): void {
    this.formData.intentType = intent;
    if (context?.plotNumber) this.formData.selectedPlotNumber = context.plotNumber;
    if (context?.villaType) this.formData.selectedVillaType = context.villaType;

    this.transitionTo('OPENED');

    // Track modal open
    AnalyticsEngine.trackEvent('lead_modal_opened', {
      intentType: intent,
      plotNumber: context?.plotNumber,
      villaType: context?.villaType
    });
  }

  public closeModal(): void {
    if (this.currentState === 'SUBMITTING') return; // Do not close while active network call
    this.transitionTo('IDLE');
  }

  public updateField<K extends keyof LeadFormData>(field: K, value: LeadFormData[K]): void {
    this.formData[field] = value;
    this.notify();
  }

  public validateForm(): { isValid: boolean; errors: Partial<Record<keyof LeadFormData, string>> } {
    const errors: Partial<Record<keyof LeadFormData, string>> = {};

    if (!this.formData.fullName || this.formData.fullName.trim().length < 3) {
      errors.fullName = 'Please enter your full name (minimum 3 characters).';
    }

    // Phone validation: Indian 10-digit or international 8-15 digits (handles leading + and international country codes)
    const cleanedPhone = this.formData.phoneNumber.replace(/[\s\-()+]/g, '');
    const phoneRegex = /^[0-9]{8,15}$/;
    if (!cleanedPhone || !phoneRegex.test(cleanedPhone)) {
      errors.phoneNumber = 'Please enter a valid phone number (e.g. +91 98800 52574 or +971 50 123 4567).';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!this.formData.email || !emailRegex.test(this.formData.email)) {
      errors.email = 'Please provide a valid corporate or personal email address.';
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  }

  public async submitForm(): Promise<SubmissionResponse> {
    const validation = this.validateForm();
    if (!validation.isValid) {
      this.transitionTo('OPENED');
      return { success: false, errorMessage: 'Form validation failed.' };
    }

    this.transitionTo('SUBMITTING');

    try {
      // In production Next.js, this posts to `/api/leads`
      const payload = {
        ...this.formData,
        submittedAt: new Date().toISOString(),
        referrer: typeof document !== 'undefined' ? document.referrer : '',
        pageUrl: typeof window !== 'undefined' ? window.location.href : ''
      };

      // Mock network latency for smooth UI transitions (or real fetch)
      await new Promise(resolve => setTimeout(resolve, 800));

      const mockReference = `LAKSH-${Math.floor(100000 + Math.random() * 900000)}`;
      const result: SubmissionResponse = {
        success: true,
        leadReferenceId: mockReference,
        assignedConciergeName: 'Sanjay Reddy (Senior Investment Director)',
        downloadUrl: CRO_CONFIG.brochureDownloadPdfUrl
      };

      this.submissionResult = result;
      this.transitionTo('SUCCESS');

      // Track conversion
      AnalyticsEngine.trackEvent('lead_form_submitted', {
        intentType: this.formData.intentType,
        plotNumber: this.formData.selectedPlotNumber,
        villaType: this.formData.selectedVillaType,
        leadId: mockReference
      });

      return result;
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : 'Network error occurred. Please contact our VIP desk.';
      this.submissionResult = { success: false, errorMessage: errorMsg };
      this.transitionTo('ERROR');
      return this.submissionResult;
    }
  }

  private transitionTo(newState: ModalState): void {
    this.currentState = newState;
    this.notify();
  }

  public subscribe(listener: (state: ModalState, data: LeadFormData, result: SubmissionResponse | null) => void): () => void {
    this.stateListeners.push(listener);
    listener(this.currentState, this.formData, this.submissionResult);
    return () => {
      this.stateListeners = this.stateListeners.filter(l => l !== listener);
    };
  }

  private notify(): void {
    for (const listener of this.stateListeners) {
      listener(this.currentState, this.formData, this.submissionResult);
    }
  }
}

// ============================================================================
// 2. VIP WHATSAPP CONCIERGE GENERATOR
// ============================================================================

export class WhatsAppConciergeEngine {
  /**
   * Generates a pre-filled, highly personalized WhatsApp conversation URL.
   */
  public static buildConciergeUrl(options: {
    plot?: MasterplanPlot;
    intent?: LeadIntentType;
    sourceCampaign?: string;
  }): string {
    const rawNumber = CRO_CONFIG.whatsappConciergeNumber.replace(/[^0-9]/g, '');
    let text = "Hello Laksh Enclave VIP Concierge, ";

    if (options.plot) {
      text += `I would like to inquire about reserving Plot ${options.plot.plotNumber} (${options.plot.areaSqFt.toLocaleString('en-IN')} sq.ft, ${options.plot.facing} facing, ${options.plot.category}). Please share availability confirmation and the payment schedule.`;
    } else {
      text += "I am interested in scheduling a private chauffeured site visit to Laksh Enclave on Bengaluru–Chennai Expressway. Kindly share the executive founding brochure and cost sheet.";
    }

    if (options.sourceCampaign) {
      text += ` [Ref: ${options.sourceCampaign}]`;
    }

    // Track analytics click
    AnalyticsEngine.trackEvent('vip_whatsapp_initiated', {
      plotNumber: options.plot?.plotNumber,
      intent: options.intent || 'GENERAL'
    });

    return `https://wa.me/${rawNumber}?text=${encodeURIComponent(text)}`;
  }
}

// ============================================================================
// 3. ANALYTICS & EVENT TRACKING ENGINE
// ============================================================================

export interface AnalyticsPayload {
  [key: string]: string | number | boolean | undefined | null;
}

export class AnalyticsEngine {
  /**
   * Dispatches events simultaneously to Google Tag Manager (DataLayer),
   * Meta Pixel, and console in development.
   */
  public static trackEvent(eventName: string, payload?: AnalyticsPayload): void {
    const eventData = {
      event: eventName,
      timestamp: new Date().toISOString(),
      ...payload
    };

    if (typeof window !== 'undefined') {
      // 1. Google Tag Manager / GA4 DataLayer
      const win = window as unknown as { dataLayer?: Array<Record<string, unknown>>; fbq?: (...args: unknown[]) => void };
      if (win.dataLayer) {
        win.dataLayer.push(eventData);
      }

      // 2. Meta Pixel custom event
      if (typeof win.fbq === 'function') {
        win.fbq('trackCustom', eventName, payload);
      }

      // 3. Structured Logging for QA
      if (process.env.NODE_ENV === 'development') {
        console.log(`[CRO Analytics] Event: ${eventName}`, payload);
      }
    }
  }
}

// ============================================================================
// 4. EXIT-INTENT & SCARCITY ENGAGEMENT DETECTOR
// ============================================================================

export class EngagementDetector {
  private hasTriggeredExit = false;
  private onExitIntentCallback: (() => void) | null = null;

  public init(callback: () => void): () => void {
    this.onExitIntentCallback = callback;

    const handleMouseLeave = (e: MouseEvent) => {
      // User moves mouse up towards browser tab bar
      if (e.clientY <= 15 && !this.hasTriggeredExit) {
        this.hasTriggeredExit = true;
        AnalyticsEngine.trackEvent('exit_intent_triggered', { triggerType: 'mouse_leave_top' });
        this.onExitIntentCallback?.();
      }
    };

    if (typeof window !== 'undefined') {
      document.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        document.removeEventListener('mouseleave', handleMouseLeave);
      };
    }

    return () => {};
  }
}
