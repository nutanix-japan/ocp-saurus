module.exports = {
  tutorialSidebar:[
    "intro",
    {
      type: 'category',
      label: 'OCP with Nutanix Cloud Manager (NCM)',
      items: ['ocp_ntnx_hci/import_bp','ocp_ntnx_hci/prov_vm','ocp_ntnx_hci/ocp_vms','ocp_ntnx_hci/ocp_scale_out_in'],
    },
    {
      type: 'category',
      label: 'OCP with IPI Installer',
      items: ['ocp_ipi_install/ocp_ipi_install'],
    },
    {
      type: 'category',
      label: 'OCP with Assisted Installer',
      items: ['ocp_assisted_install/ocp_assisted_install'],
    },
    {
      type: 'category',
      label: 'Nutanix Storage CSI',
      items: ['ocp_ntnx_hci/ocp_csi','optional_labs/ocp_image_registry'],
    },
    {
      type: 'category',
      label: 'Workloads on OCP',
      items: ['optional_labs/objects_prep','workloads_on_ocp/ocp_k10','workloads_on_ocp/ocp_wordpress_deploy','workloads_on_ocp/ocp_k10_backup_restore'],
    },
    {
      type: 'category',
      label: 'OCP Optional Labs',
      items: ['optional_labs/ocp_vms_2','optional_labs/ocp_idp'],
    },
    {
      type: 'category',
      label: 'Tools VMs',
      items: ['toolsvms/linux_tools_vm','toolsvms/windows_tools_vm'],
    },
  ],
};
