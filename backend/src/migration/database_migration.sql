CREATE TABLE IF NOT EXISTS dev.loan_credit_type (
    id uuid NOT NULL PRIMARY KEY,
    type varchar(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS dev.check_type (
    id uuid NOT NULL PRIMARY KEY,
    type varchar(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS dev.privileges (
    id uuid NOT NULL PRIMARY KEY,
    privilege varchar(200) NOT NULL
);

CREATE TABLE IF NOT EXISTS dev.status (
    id uuid NOT NULL PRIMARY KEY,
    status varchar(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS dev.card_type (
    id uuid NOT NULL PRIMARY KEY,
    name varchar(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS dev.insurance_type (
    id uuid NOT NULL PRIMARY KEY,
    name varchar(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS dev.department (
    id uuid NOT NULL PRIMARY KEY,
    name varchar(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS dev.role (
    id uuid NOT NULL PRIMARY KEY,
    name varchar(50) NOT NULL,
    department_id uuid NOT NULL,
    CONSTRAINT fk_department_id FOREIGN KEY (department_id) REFERENCES dev.department (id) MATCH SIMPLE
);

CREATE TABLE IF NOT EXISTS dev.postal_code (
    id uuid NOT NULL PRIMARY KEY,
    code varchar(10) NOT NULL,
    location varchar(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS dev.holder (
    id uuid NOT NULL PRIMARY KEY,
    name varchar(30) NOT NULL
);

CREATE TABLE IF NOT EXISTS dev.account_type (
    id uuid NOT NULL PRIMARY KEY,
    type varchar(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS dev.card (
    id uuid NOT NULL PRIMARY KEY,
    number varchar(255) NOT NULL,
    exp_date DATE NOT NULL,
    cvv varchar(255) NOT NULL,
    amount_limit float NOT NULL,
    card_type_id uuid NOT NULL,
    CONSTRAINT card_card_type_id_fkey FOREIGN KEY (card_type_id) REFERENCES dev.card_type (id) MATCH SIMPLE
);

CREATE TABLE IF NOT EXISTS dev.contact_type (
    id uuid NOT NULL PRIMARY KEY,
    type varchar(25) NOT NULL
);

CREATE TABLE IF NOT EXISTS dev.pronoun (
    id uuid NOT NULL PRIMARY KEY,
    name varchar(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS dev.sex_type (
    id uuid NOT NULL PRIMARY KEY,
    type varchar(25) NOT NULL
);

CREATE TABLE IF NOT EXISTS dev.user (
    id uuid NOT NULL PRIMARY KEY,
    name varchar(100) NOT NULL,
    pronoun_id uuid NOT NULL,
    picture_name varchar(150) NOT NULL,
    dob DATE NOT NULL,
    address varchar(255) NOT NULL,
    sex_type_id uuid NOT NULL,
    postal_code_id uuid NOT NULL,
    registration_date DATE NOT NULL,
    status_id uuid NOT NULL,
    nif varchar(10) NOT NULL,
    hashed_password TEXT NOT NULL,
    CONSTRAINT user_sex_type_id_fkey FOREIGN KEY (sex_type_id) REFERENCES dev.sex_type (id) MATCH SIMPLE,
    CONSTRAINT user_postal_code_id_fkey FOREIGN KEY (postal_code_id) REFERENCES dev.postal_code (id) MATCH SIMPLE,
    CONSTRAINT user_status_id_fkey FOREIGN KEY (status_id) REFERENCES dev.status (id) MATCH SIMPLE,
    CONSTRAINT user_pronoun_id_fkey FOREIGN KEY (pronoun_id) REFERENCES dev.pronoun (id) MATCH SIMPLE
);

CREATE TABLE IF NOT EXISTS dev.user_privileges (
    id uuid NOT NULL PRIMARY KEY,
    user_id uuid NOT NULL,
    privilege_id uuid NOT NULL,
    CONSTRAINT user_privileges_user_id_fkey FOREIGN KEY (user_id) REFERENCES dev.user (id) MATCH SIMPLE,
    CONSTRAINT user_privileges_privilege_id_fkey FOREIGN KEY (privilege_id) REFERENCES dev.privileges (id) MATCH SIMPLE
);

CREATE TABLE IF NOT EXISTS dev.contact (
    id uuid NOT NULL PRIMARY KEY,
    user_id uuid NOT NULL,
    contact_type_id uuid NOT NULL,
    contact_value varchar(50) NOT NULL,
    CONSTRAINT contact_contact_type_id_fkey FOREIGN KEY (contact_type_id) REFERENCES dev.contact_type (id) MATCH SIMPLE,
    CONSTRAINT contact_user_id_fkey FOREIGN KEY (user_id) REFERENCES dev.user (id) MATCH SIMPLE
);

CREATE TABLE IF NOT EXISTS dev.agencies (
    id uuid NOT NULL PRIMARY KEY,
    name varchar(100) NOT NULL,
    address varchar(100) NOT NULL,
    contact_id uuid NOT NULL,
    postal_code_id uuid NOT NULL,
    CONSTRAINT agencies_contact_id_fkey FOREIGN KEY (contact_id) REFERENCES dev.contact (id) MATCH SIMPLE,
    CONSTRAINT agencies_postal_code_id_fkey FOREIGN KEY (postal_code_id) REFERENCES dev.postal_code MATCH SIMPLE
);

CREATE TABLE IF NOT EXISTS dev.employee (
    user_id uuid NOT NULL PRIMARY KEY,
    role_id uuid NOT NULL,
    salary float NOT NULL,
    CONSTRAINT employee_user_id_fkey FOREIGN KEY (user_id) REFERENCES dev.user (id) MATCH SIMPLE
);

CREATE TABLE IF NOT EXISTS dev.employees_agencies (
    id uuid NOT NULL PRIMARY KEY,
    user_id uuid NOT NULL,
    agencie_id uuid NOT NULL,
    CONSTRAINT employees_agencies_user_id_fkey FOREIGN KEY (user_id) REFERENCES dev.user (id) MATCH SIMPLE,
    CONSTRAINT employees_agencies_agencie_id_fkey FOREIGN KEY (agencie_id) REFERENCES dev.agencies (id) MATCH SIMPLE
);

CREATE TABLE IF NOT EXISTS dev.action (
    id uuid NOT NULL PRIMARY KEY,
    name varchar(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS dev.logs (
    id uuid NOT NULL PRIMARY KEY,
    user_id uuid NOT NULL,
    details text NOT NULL,
    action_id uuid NOT NULL,
    CONSTRAINT logs_action_id_fkey FOREIGN KEY (action_id) REFERENCES dev.action (id) MATCH SIMPLE
);

CREATE TABLE IF NOT EXISTS dev.bank_account (
    account_number uuid NOT NULL PRIMARY KEY,
    iban varchar(26) NOT NULL,
    current_balance float NOT NULL,
    available_balance float NOT NULL,
    account_type_id uuid NOT NULL,
    opened_date DATE NOT NULL,
    closed_date DATE,
    status_id UUID NOT NULL,
    CONSTRAINT bank_account_account_type_id_fkey FOREIGN KEY (account_type_id) REFERENCES dev.account_type (id) MATCH SIMPLE,
    CONSTRAINT bank_account_status_id_fkey FOREIGN KEY (status_id) REFERENCES dev.status (id) MATCH SIMPLE
);

CREATE TABLE IF NOT EXISTS dev.user_bank_connector (
    id uuid NOT NULL PRIMARY KEY,
    user_id uuid NOT NULL,
    account_number_id uuid NOT NULL,
    holder_id uuid NOT NULL,
    CONSTRAINT user_bank_connector_user_id_fkey FOREIGN KEY (user_id) REFERENCES dev.user (id) MATCH SIMPLE,
    CONSTRAINT user_bank_connector_account_number_id_fkey FOREIGN KEY (account_number_id) REFERENCES dev.bank_account (account_number) MATCH SIMPLE,
    CONSTRAINT user_bank_connector_holder_type_id_fkey FOREIGN KEY (holder_id) REFERENCES dev.holder (id) MATCH SIMPLE
);

CREATE TABLE IF NOT EXISTS dev.loan_credit (
    id uuid NOT NULL PRIMARY KEY,
    value float NOT NULL,
    start_date DATE NOT NULL,
    final_date DATE NOT NULL,
    terms text NOT NULL,
    status_id uuid NOT NULL,
    tan float NOT NULL,
    taeg float NOT NULL,
    mtic float NOT NULL,
    account_number_id uuid NOT NULL,
    loan_credit_type_id uuid NOT NULL,
    CONSTRAINT loan_credit_loan_credit_type_id_fkey FOREIGN KEY (loan_credit_type_id) REFERENCES dev.loan_credit_type (id) MATCH SIMPLE,
    CONSTRAINT loan_credit_status_id_fkey FOREIGN KEY (status_id) REFERENCES dev.status (id) MATCH SIMPLE,
    CONSTRAINT loan_credit_status_account_number_id FOREIGN KEY (account_number_id) REFERENCES dev.bank_account (account_number) MATCH SIMPLE
);

CREATE TABLE IF NOT EXISTS dev.credit_payment (
    id uuid NOT NULL PRIMARY KEY,
    value_paid FLOAT NOT NULL,
    payment_date DATE NOT NULL,
    loan_credit_id uuid NOT NULL,
    CONSTRAINT credit_paymento_loand_credit_id_fkey FOREIGN KEY (loan_credit_id) REFERENCES dev.loan_credIt (id) MATCH SIMPLE
);

CREATE TABLE IF NOT EXISTS dev.checks (
    id uuid NOT NULL PRIMARY KEY,
    check_number varchar(100) NOT NULL,
    value float NOT NULL,
    emission_date DATE NOT NULL,
    account_number_id uuid NOT NULL,
    check_type_id uuid NOT NULL,
    CONSTRAINT checks_account_number_id_fkey FOREIGN KEY (account_number_id) REFERENCES dev.bank_account (account_number) MATCH SIMPLE,
    CONSTRAINT checks_check_type_id_fkey FOREIGN KEY (check_type_id) REFERENCES dev.check_type (id) MATCH SIMPLE
);

CREATE TABLE IF NOT EXISTS dev.insurance (
    id uuid NOT NULL PRIMARY KEY,
    detaisl TEXT NOT NULL,
    exp_date DATE NOT NULL,
    registration_date DATE NOT NULL,
    status_id uuid NOT NULL,
    insurance_type_id uuid NOT NULL,
    CONSTRAINT insurance_status_id_fkey FOREIGN KEY (status_id) REFERENCES dev.status (id) MATCH SIMPLE,
    CONSTRAINT insurance_insurance_type_id_fkey FOREIGN KEY (insurance_type_id) REFERENCES dev.insurance_type (id) MATCH SIMPLE
);

CREATE TABLE IF NOT EXISTS dev.insurance_members (
    id uuid NOT NULL PRIMARY KEY,
    insurance_id uuid NOT NULL,
    user_id uuid NOT NULL,
    CONSTRAINT insurance_members_insurance_id_fke FOREIGN KEY (insurance_id) REFERENCES dev.insurance (id) MATCH SIMPLE,
    CONSTRAINT insurance_members_user_id_fkey FOREIGN KEY (user_id) REFERENCES dev.user (id) MATCH SIMPLE
);

CREATE TABLE IF NOT EXISTS dev.account_card_connector (
    id uuid NOT NULL PRIMARY KEY,
    account_number_id uuid NOT NULL,
    card_id uuid NOT NULL,
    CONSTRAINT account_card_connector_account_number_id_fkey FOREIGN KEY (account_number_id) REFERENCES dev.bank_account (account_number) MATCH SIMPLE,
    CONSTRAINT account_card_connector_card_id_fkey FOREIGN KEY (card_id) REFERENCES dev.card (id) MATCH SIMPLE
);

CREATE TABLE IF NOT EXISTS dev.insurance_account_connector (
    id uuid NOT NULL PRIMARY KEY,
    account_number_id uuid NOT NULL,
    insurance_id uuid NOT NULL,
    CONSTRAINT insurance_account_connector_account_number_id_fkey FOREIGN KEY (account_number_id) REFERENCES dev.bank_account (account_number) MATCH SIMPLE,
    CONSTRAINT insurance_account_connector_insurance_id_fkey FOREIGN KEY (insurance_id) REFERENCES dev.insurance (id) MATCH SIMPLE
);

CREATE TABLE IF NOT EXISTS dev.balance_history (
    id uuid NOT NULL PRIMARY KEY,
    balance_before float NOT NULL,
    balance_after float NOT NULL
);

CREATE TABLE IF NOT EXISTS dev.generated_code (
    id uuid NOT NULL PRIMARY KEY,
    code varchar(15) NOT NULL,
    ammount float NOT NULL,
    exp_date DATE NOT NULL,
    used boolean NOT NULL,
    account_number_id uuid NOT NULL,
    CONSTRAINT generated_code_account_number_id_fkey FOREIGN KEY (account_number_id) REFERENCES dev.bank_account (account_number) MATCH SIMPLE
);

CREATE TABLE IF NOT EXISTS dev.transfer (
    id uuid NOT NULL PRIMARY KEY,
    source_account_id uuid NOT NULL,
    destination_account_id uuid NOT NULL,
    ammount float NOT NULL,
    tax_fee float NOT NULL,
    date DATE NOT NULL,
    description varchar(150) NOT NULL,
    CONSTRAINT transfer_source_account_id_fkey FOREIGN KEY (source_account_id) REFERENCES dev.bank_account (account_number) MATCH SIMPLE,
    CONSTRAINT transfer_destination_account_id_fkey FOREIGN KEY (destination_account_id) REFERENCES dev.bank_account (account_number) MATCH SIMPLE
);

CREATE TABLE IF NOT EXISTS dev.period_type (
    id uuid NOT NULL PRIMARY KEY,
    type varchar(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS dev.recurring_transfer (
    id uuid NOT NULL PRIMARY KEY,
    source_account_id uuid NOT NULL,
    destination_account_id uuid NOT NULL,
    ammount float NOT NULL,
    tax_fee float NOT NULL,
    period_type_id uuid NOT NULL,
    status_id uuid NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    description varchar(150) NOT NULL,
    CONSTRAINT recurring_transfer_status_id_fkey FOREIGN KEY (status_id) REFERENCES dev.status (id) MATCH SIMPLE,
    CONSTRAINT recurring_transfer_period_type_id_fkey FOREIGN KEY (period_type_id) REFERENCES dev.period_type (id) MATCH SIMPLE,
    CONSTRAINT recurring_transfer_source_account_id_fkey FOREIGN KEY (source_account_id) REFERENCES dev.bank_account (account_number) MATCH SIMPLE,
    CONSTRAINT recurring_transfer_destination_account_id_fkey FOREIGN KEY (destination_account_id) REFERENCES dev.bank_account (account_number) MATCH SIMPLE
);

CREATE TABLE IF NOT EXISTS dev.withdraw_deposit_atm (
    id uuid NOT NULL PRIMARY KEY,
    ammount float NOT NULL,
    atm_code uuid NOT NULL,
    sign varchar(2) NOT NULL,
    description varchar(150) NOT NULL,
    date DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS dev.table_name (
    id uuid NOT NULL PRIMARY KEY,
    name varchar(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS dev.bank_account_movements (
    id uuid NOT NULL PRIMARY KEY,
    account_number_id uuid NOT NULL,
    movement_id uuid NOT NULL,
    table_name_id uuid NOT NULL,
    date TIMESTAMP NOT NULL,
    balance_history_id uuid NOT NULL,
    CONSTRAINT bank_account_movements_balance_history_id_fkey FOREIGN KEY (balance_history_id) REFERENCES dev.balance_history (id) MATCH SIMPLE,
    CONSTRAINT bank_account_movements_account_number_id_fkey FOREIGN KEY (account_number_id) REFERENCES dev.bank_account (account_number) MATCH SIMPLE,
    CONSTRAINT bank_account_movements_table_name_id_fkey FOREIGN KEY (table_name_id) REFERENCES dev.table_name (id) MATCH SIMPLE,
    CONSTRAINT bank_account_movements_movement_id_fkey1 FOREIGN KEY (movement_id) REFERENCES dev.withdraw_deposit_atm (id) MATCH SIMPLE,
    CONSTRAINT bank_account_movements_movement_id_fkey1 FOREIGN KEY (movement_id) REFERENCES dev.recurring_transfer (id) MATCH SIMPLE,
    CONSTRAINT bank_account_movements_movement_id_fkey1 FOREIGN KEY (movement_id) REFERENCES dev.transfer (id) MATCH SIMPLE,
    CONSTRAINT bank_account_movements_movement_id_fkey1 FOREIGN KEY (movement_id) REFERENCES dev.generated_code (id) MATCH SIMPLE
);

CREATE TABLE IF NOT EXISTS dev.account_notifications (
    id uuid NOT NULL PRIMARY KEY,
    account_number_id uuid NOT NULL,
    user_id uuid NOT NULL,
    CONSTRAINT account_notifications_account_number_id_fkey FOREIGN KEY (account_number_id) REFERENCES dev.bank_account (account_number) MATCH SIMPLE,
    CONSTRAINT account_notifications_user_id_fkey FOREIGN KEY (user_id) REFERENCES dev.user (id) MATCH SIMPLE
);