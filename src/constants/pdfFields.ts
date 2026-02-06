/**
 * A set of constants used to denote the fillable PDF fields in both the MathSoc and Club cheque request forms.
 */
export const PDF_FIELDS = {
    AREA_OF_SOCIETY: 'area_of_society',
    CLUB_NAME: 'club_name',
    DATE_SIGNED: 'sign_date',
    PAYABLE_TO: 'cheque_payable_to',
    WATIAM: 'watiam',
    PAYEE_EMAIL: 'payee_email',
    MAILING_ADDRESS: 'mailing_address',
    PICKED_UP: 'picked_up',
    MAIL_CHEQUE: 'mail_cheque',
    LINE_ITEM: 'budget_line_item',
    EVENT_ID: 'event_id',
    ITEM_DESC: 'reimbursement_desc',
    SUBMITTED_BY: 'submitted_by',
    SUBMITTER_EMAIL: 'submitter_email',
    INSTRUCTIONS: 'special_instructions',
    DESC_1: 'desc_1',
    DESC_2: 'desc_2',
    DESC_3: 'desc_3',
    DESC_4: 'desc_4',
    AMT_1: 'amt_1',
    AMT_2: 'amt_2',
    AMT_3: 'amt_3',
    AMT_4: 'amt_4',
    SUBTOTAL: 'subtotal',
    TAX: 'total_tax',
    TOTAL: 'grand_total'
} as const;
