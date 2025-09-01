import FloatingInputWrapper from '@/components/common/inputFields/FloatingInputWrapper';
import IconInputWrapper from '@/components/common/inputFields/IconInputWrapper';
import SimpleTitleWrapper from '@/components/common/inputFields/SimpleTitleWrapper';

const InputWrapper = (WrappedComponent) => {
  const HocComponent = ({ ...props }) => (
    <>
      {props?.notitle == 'true' ? (
        <WrappedComponent {...props} />
      ) : props?.inputaddon || props?.toplabel || props?.colprops ? (
        <IconInputWrapper label={props?.toplabel} colprops={props?.colprops} colclass={props?.colclass} require={props?.require}>
          <WrappedComponent {...props} />
        </IconInputWrapper>
      ) : props?.title && props?.label ? (
        <FloatingInputWrapper>
          <WrappedComponent {...props} />
        </FloatingInputWrapper>
      ) : (
        <SimpleTitleWrapper title={props?.title} colProps={props?.colProps} colClass={props?.colClass}>
          <WrappedComponent {...props} />
        </SimpleTitleWrapper>
      )}
    </>
  );
  return HocComponent;
};

export default InputWrapper;
